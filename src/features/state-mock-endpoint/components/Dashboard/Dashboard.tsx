import BlurredText from "@/components/Blur/BlurredText";
import ItemsList from "./ItemsList";

interface IDashboardProps {
  userID: string;
}

export default function Dashboard({ userID }: IDashboardProps) {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg flex items-center gap-2">
          Welcome, User
          <BlurredText
            text={userID}
            from="right"
            className="via-cyan-950 to-cyan-950"
          />
        </h2>
      </div>
      <ItemsList />
    </section>
  );
}
