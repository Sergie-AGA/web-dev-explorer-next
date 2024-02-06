import GlobalHeader from "@/components/Global/GlobalHeader/GlobalHeader.tsx";
import GlobalMenu from "@/components/Menu/GlobalMenu";
import StackingToastContainer from "@/components/Toasts/StackingToast/StackingToastContainer.tsx";

export default function RootLayout({ children }) {
  return (
    <div className="site-wrap bg-cyan-950">
      <GlobalHeader>
        <GlobalMenu />
      </GlobalHeader>
      {children}
      {/* <StackingToastContainer /> */}
    </div>
  );
}
