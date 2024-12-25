import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../../../styles/global.css";
import { TanstackProvider } from "@/context/tanstack";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";

export const metadata = {
  title: "Gotta Catch 'Em All",
  description:
    "Capture Pokémon in a simple game and track your progress while earning achievements, leveling up, and unlocking new features",
};

const queryClient = new QueryClient();

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
      <main className="flex flex-col grow">
        <TanstackProvider>{children}</TanstackProvider>
      </main>
    </div>
  );
}
