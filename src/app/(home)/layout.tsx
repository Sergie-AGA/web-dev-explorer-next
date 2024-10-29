import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import GlobalMenu from "@/components/Menu/GlobalMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className="min-h-screen site-wrap bg-cyan-900">
      <GlobalHeader>
        <GlobalMenu />
      </GlobalHeader>
      {children}
    </div>
  );
}
