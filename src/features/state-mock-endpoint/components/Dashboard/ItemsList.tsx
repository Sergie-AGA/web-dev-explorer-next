import { useUserContext } from "../../context/UserContext";
import { useFirebaseGetAllByID } from "../../hooks/useFirebase";

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

  if (items.length > 0) {
    return (
      <div>
        <ul>
          {items.map((doc) => (
            <li key={doc.id}>{/* Render your item here */}</li>
          ))}
        </ul>
        <button onClick={loadMore}>Load More</button>
      </div>
    );
  } else {
    return <p>No documents found</p>;
  }
}
