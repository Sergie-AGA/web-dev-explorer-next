import GlobalHeader from "@/components/Global/GlobalHeader/GlobalHeader";
import "../../../styles/global.css";

export const metadata = {
  title: "Gotta Catch 'Em All",
  description:
    "Capture Pokémon in a simple game and track your progress while earning achievements, leveling up, and unlocking new features",
};

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-width-container min-h-screen flex flex-col justify-start">
      <GlobalHeader
        className="m-0 mt-4 p-0"
        title="Gotta Catch 'Em All"
      ></GlobalHeader>
      <main className="flex flex-col grow">{children}</main>
    </div>
  );
}
