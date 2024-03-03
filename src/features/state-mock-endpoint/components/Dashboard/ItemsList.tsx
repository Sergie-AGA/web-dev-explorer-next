"use client";

import { format } from "date-fns";
import { useUserContext } from "../../context/UserContext";
import { useFirebaseGetAllByID } from "../../hooks/useFirebase";
import TaskItem from "./TaskItem";
import NewItemButton from "./NewItemButton";
import { useState } from "react";
import LocalModal from "@/components/Modals/LocalModal/LocalModal";
import LoadMore from "./LoadMore";

export default function ItemsList() {
  const { existingUser } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  const { items, error, loading, loadMore, loadingMore, lastDoc } =
    useFirebaseGetAllByID(existingUser, 20);

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
            qwe
          </LocalModal>
        )}
      </div>
    );
  } else {
    return <p>No documents found</p>;
  }
}
