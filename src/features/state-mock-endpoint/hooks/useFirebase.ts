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
  updateDoc,
  doc,
  runTransaction,
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
  refresh: () => void;
  isMounted: boolean;
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

  // Refresh
  const refresh = async () => {
    setItems([]);
    setLoading(true);
    setLoadingMore(false);
    setError(null);
    setLastDoc(null);

    try {
      await fetchItems(() =>
        query(
          itemsCollection,
          where("userID", "==", userID),
          orderBy("executionTimestamp", "desc"),
          limit(pageSize)
        )
      );
    } catch (error) {
      console.error("Error refreshing documents:", error);
      setError(
        "Error refreshing documents: " +
          (error instanceof Error ? error.message : "")
      );
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  return {
    items,
    loading,
    error,
    loadMore,
    loadingMore,
    lastDoc,
    refresh,
    isMounted: isMounted.current,
  };
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

// Patch
type UseFirebasePatchResult = {
  patchItem: (itemID: string, updatedFields: Partial<IItem>) => Promise<void>;
  patching: boolean;
  patchError: string | null;
};

export function useFirebasePatch(): UseFirebasePatchResult {
  const [patching, setPatching] = useState(false);
  const [patchError, setPatchError] = useState<string | null>(null);

  const patchItem = async (itemID: string, updatedFields: Partial<IItem>) => {
    try {
      setPatching(true);

      const itemsCollection = collection(firestore, "items");
      const itemDocRef = doc(itemsCollection, itemID);

      // Update the item with the provided fields
      await updateDoc(itemDocRef, updatedFields);
    } catch (error) {
      console.error("Error patching document:", error);
      setPatchError(
        "Error patching document: " +
          (error instanceof Error ? error.message : "")
      );
    } finally {
      setPatching(false);
    }
  };

  return { patchItem, patching, patchError };
}

// Delete
type UseFirebaseDeleteResult = {
  deleteItem: (itemID: string) => Promise<boolean>;
  deleting: boolean;
  deleteError: string | null;
};

export function useFirebaseDelete(): UseFirebaseDeleteResult {
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const deleteItem = async (itemID: string): Promise<boolean> => {
    try {
      setDeleting(true);

      const itemsCollection = collection(firestore, "items");
      const itemDocRef = doc(itemsCollection, itemID);

      await runTransaction(firestore, async (transaction) => {
        const itemDoc = await transaction.get(itemDocRef);

        if (!itemDoc.exists()) {
          throw new Error(`Document with ID ${itemID} not found.`);
        }

        transaction.delete(itemDocRef);
      });

      return true;
    } catch (error) {
      console.error("Error deleting document:", error);
      setDeleteError(
        "Error deleting document: " +
          (error instanceof Error ? error.message : "")
      );
      return false;
    } finally {
      setDeleting(false);
    }
  };

  return { deleteItem, deleting, deleteError };
}
