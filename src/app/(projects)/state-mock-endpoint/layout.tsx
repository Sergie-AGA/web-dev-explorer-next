import GlobalHeader from "@/components/Global/GlobalHeader/GlobalHeader";
import SettingsIcon from "@/features/state-mock-endpoint/components/Menus/SettingsIcon";
import "../../../styles/global.css";
import { UserProvider } from "@/features/state-mock-endpoint/context/UserContext";

export const metadata = {
  title: "State Mock Endpoint",
  description: "A proof of concept of a product listing",
};

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen site-wrap">
      <UserProvider>
        <GlobalHeader title="State Mock Endpoint">
          <SettingsIcon />
        </GlobalHeader>
        <main className="max-width-container">{children}</main>
      </UserProvider>
    </div>
  );
}
