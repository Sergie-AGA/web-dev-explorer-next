import { format } from "date-fns";
import { useUserContext } from "../../context/UserContext";
import { useFirebaseGetAllByID } from "../../hooks/useFirebase";
import TaskItem from "./TaskItem";

export default function ItemsList() {
  const { existingUser } = useUserContext();
  const { items, error, loading, loadMore } = useFirebaseGetAllByID(
    existingUser,
    1
  );

  if (error) {
    console.error("Error:", error);
    return <p>Error loading documents</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(items);

  if (items.length > 0) {
    return (
      <div>
        <ul>
          {items.map((doc) => (
            <TaskItem
              key={doc.id}
              title={doc.title}
              date={format(
                new Date(doc.executionTimestamp.seconds * 1000),
                "dd/MM/yyyy - HH:mm"
              )}
            />
          ))}
        </ul>
        <button onClick={loadMore}>Load More</button>
      </div>
    );
  } else {
    return <p>No documents found</p>;
  }
}
