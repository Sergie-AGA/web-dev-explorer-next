import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  addDoc,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { firestore } from "@/lib/firebaseClient";
import { IItem } from "../types/Item";

type UseFirebaseGetAllResult = {
  items: IItem[];
  loading: boolean;
  loadingMore: boolean;
  error: string | null;
  loadMore: () => void;
  lastDoc: DocumentData | null;
};

export function useFirebaseGetAllByID(
  userID: string,
  pageSize: number = 20
): UseFirebaseGetAllResult {
  const [items, setItems] = useState<IItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastDoc, setLastDoc] = useState<DocumentData | null>(null);
  const isMounted = useRef(true);

  const itemsCollection = collection(firestore, "items");

  const fetchItems = async (queryFn: (lastDoc: DocumentData | null) => any) => {
    setLoadingMore(true);

    try {
      const itemsQuery = queryFn(lastDoc);
      const itemsSnapshot = await getDocs(itemsQuery);
      const itemsData: IItem[] = itemsSnapshot.docs.map((doc) => ({
        ...(doc.data() as IItem),
        id: doc.id,
      }));

      if (itemsData.length === 0) {
        setLastDoc(null);
      } else {
        const lastItem = itemsSnapshot.docs[itemsSnapshot.docs.length - 1];
        setLastDoc(lastItem);
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
      setLoadingMore(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = false;
      const initialFetch = async () => {
        await fetchItems(() =>
          query(
            itemsCollection,
            where("userID", "==", userID),
            orderBy("executionTimestamp", "desc"),
            limit(pageSize)
          )
        );
      };

      initialFetch();
    }
  }, [userID, pageSize, itemsCollection]);

  // Load more
  const loadMore = () => {
    if (lastDoc) {
      fetchItems(() =>
        query(
          itemsCollection,
          where("userID", "==", userID),
          orderBy("executionTimestamp", "desc"),
          startAfter(lastDoc),
          limit(pageSize)
        )
      );
    }
  };

  return { items, loading, error, loadMore, loadingMore, lastDoc };
}

// Post
type UseFirebasePostResult = {
  postItem: (item: Omit<IItem, "id">) => Promise<void>;
  posting: boolean;
  postError: string | null;
};

export function useFirebasePost(): UseFirebasePostResult {
  const [posting, setPosting] = useState(false);
  const [postError, setPostError] = useState<string | null>(null);

  const postItem = async (item: Omit<IItem, "id">) => {
    try {
      setPosting(true);

      // Assuming "items" is the collection name
      const itemsCollection = collection(firestore, "items");

      // Add the new item to the collection
      await addDoc(itemsCollection, item);
    } catch (error) {
      console.error("Error posting document:", error);
      setPostError(
        "Error posting document: " +
          (error instanceof Error ? error.message : "")
      );
    } finally {
      setPosting(false);
    }
  };

  return { postItem, posting, postError };
}
