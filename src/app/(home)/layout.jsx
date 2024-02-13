import GlobalHeader from "@/components/Global/GlobalHeader/GlobalHeader.tsx";
import GlobalMenu from "@/components/Menu/GlobalMenu";

export default function RootLayout({ children }) {
  return (
    <div className="site-wrap bg-cyan-900">
      <GlobalHeader>
        <GlobalMenu />
      </GlobalHeader>
      {children}
    </div>
  );
}
