import BlurredText from "@/components/Global/Blur/BlurredText";

interface IDashboardProps {
  userID: string;
}

export default function Dashboard({ userID }: IDashboardProps) {
  return (
    <section>
      <h2 className="text-lg flex items-center gap-2">
        Welcome, User
        <BlurredText text={userID} from="right" className="w-[80%]" />
      </h2>
    </section>
  );
}
