"use client";

import { format } from "date-fns";
import { useUserContext } from "../../context/UserContext";
import {
  useFirebaseDelete,
  useFirebaseGetAllByID,
} from "../../hooks/useFirebase";
import TaskItem from "./TaskItem";
import NewItemButton from "./NewItemButton";
import { useEffect, useState } from "react";
import LocalModal from "@/components/Modals/LocalModal/LocalModal";
import LoadMore from "./LoadMore";
import { Button } from "@/components/ShadcnUi/Button";
import { IItem } from "../../types/Item";
import ItemEditor from "./ItemEditor";

export default function ItemsList() {
  const { existingUser } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IItem | null>(null);
  const [modalType, setModalType] = useState("");
  const {
    items,
    error,
    loading,
    loadMore,
    loadingMore,
    lastDoc,
    refresh,
    isMounted,
  } = useFirebaseGetAllByID(existingUser, 20);
  const { deleteItem, deleting, deleteError } = useFirebaseDelete();

  useEffect(() => {
    if (!isMounted) {
      refresh();
    }
  }, [existingUser]);

  if (error) {
    console.error("Error:", error);
    return <p>Error loading documents</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    setModalType("");
    setSelectedItem(null);
  }

  function handleEditSetup(id: string) {}

  function handleDeleteSetup(task: IItem) {
    setModalType("delete");
    setSelectedItem(task);
    openModal();
  }

  async function handleDelete() {
    if (selectedItem?.id) {
      const deletionResult = await deleteItem(selectedItem.id);

      if (deletionResult) {
        closeModal();
        refresh();
      } else {
        console.error("Error deleting item:", deleteError);
      }
    }
  }

  if (items.length > 0) {
    return (
      <div className="flex flex-col gap-4">
        <div>
          <NewItemButton onClick={openModal} />
        </div>
        <ul className="flex flex-col gap-4">
          {items.map((doc) => (
            <TaskItem
              key={doc.id}
              title={doc.title}
              date={format(
                new Date(doc.executionTimestamp.seconds * 1000),
                "dd/MM/yyyy - HH:mm"
              )}
              header={doc.header}
              body={doc.body}
              response={doc.response}
              handleEdit={() => handleEditSetup(doc.id)}
              handleDelete={() => handleDeleteSetup(doc)}
            />
          ))}
        </ul>
        {lastDoc && (
          <div className="self-end">
            <LoadMore onClick={loadMore} loadingMore={loadingMore} />
          </div>
        )}
        {isOpen && (
          <LocalModal
            startOpen={isOpen}
            persistent={false}
            closeModal={closeModal}
          >
            {modalType == "delete" ? (
              <div className="flex flex-col gap-4 items-start">
                <p>Are you sure you want to delete this item?</p>
                <p>Title: {selectedItem?.title}</p>
                <Button onClick={handleDelete} variant="destructive">
                  {deleting ? "Deleting" : "Confirm Deletion"}
                </Button>
                <p>{deleteError ? deleteError : ""}</p>
              </div>
            ) : (
              <ItemEditor />
            )}
          </LocalModal>
        )}
      </div>
    );
  } else {
    return <p>No documents found</p>;
  }
}
