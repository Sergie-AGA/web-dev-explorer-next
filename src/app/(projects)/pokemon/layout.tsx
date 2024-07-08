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
    <div className="min-h-screen site-wrap">
      <GlobalHeader title="Fandom Battle"></GlobalHeader>
      <main className="max-width-container">{children}</main>
    </div>
  );
}
