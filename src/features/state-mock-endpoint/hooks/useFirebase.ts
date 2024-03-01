import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  getDocs,
  where,
  query,
  limit,
  orderBy,
  startAfter,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { firestore } from "@/lib/firebaseClient";
import { IItem } from "../types/Item";

type UseFirebaseGetAllResult = {
  items: IItem[];
  loading: boolean;
  error: string | null;
  loadMore: () => void;
};

export function useFirebaseGetAllByID(
  userID: string,
  pageSize: number = 20
): UseFirebaseGetAllResult {
  const [items, setItems] = useState<IItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastDoc, setLastDoc] = useState<DocumentData | null>(null);

  const effectHasRun = useRef(false);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);

      const itemsCollection = collection(firestore, "items");
      let itemsQuery = query(
        itemsCollection,
        where("userID", "==", userID),
        orderBy("executionTimestamp"),
        limit(pageSize)
      );

      if (lastDoc) {
        itemsQuery = query(
          itemsCollection,
          where("userID", "==", userID),
          orderBy("executionTimestamp"),
          startAfter(lastDoc),
          limit(pageSize)
        );
      }

      try {
        const itemsSnapshot = await getDocs(itemsQuery);
        const itemsData: IItem[] = firebaseToData(itemsSnapshot.docs);

        if (itemsData.length === 0) {
          setLastDoc(null);
        } else {
          const lastItem = itemsSnapshot.docs[itemsSnapshot.docs.length - 1];
          setLastDoc(lastItem ? lastItem.data() : null);
        }

        setItems((prevItems) => [...prevItems, ...itemsData]);
      } catch (error) {
        console.error("Error fetching documents:", error);
        setError(
          "Error fetching documents: " +
            (error instanceof Error ? error.message : "")
        );
      } finally {
        setLoading(false);
      }
    };

    if (!effectHasRun.current) {
      fetchItems();
      effectHasRun.current = true;
    }
  }, [userID, pageSize, lastDoc, effectHasRun]);

  const loadMore = () => {
    if (items.length > 0) {
      const lastItem = items[items.length - 1];
      setLastDoc(lastItem.executionTimestamp);
    }
  };

  return { items, loading, error, loadMore };
}

function firebaseToData(docs: QueryDocumentSnapshot<DocumentData>[]): IItem[] {
  return docs.map((doc) => ({
    ...(doc.data() as IItem),
    id: doc.id,
  }));
}
