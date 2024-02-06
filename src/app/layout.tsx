import "../styles/global.css";
import "../styles/morphing-card.css";
import { Open_Sans, Source_Code_Pro } from "next/font/google";
import { ThemeProvider } from "@/components/Global/Themes/ThemeProvider"
import GlobalModal from "@/components/Modals/GlobalModal/GlobalModal";
import TechModal from "@/features/homepage/components/TechModal";
import FiltersModal from "@/features/homepage/components/FilterModal";

const openSans = Open_Sans({ subsets: ["latin"] });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "Web Dev Explorer",
  description: "Exploring features of Web Development",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${openSans.className} ${sourceCodePro.className}`}
    >
        
      <body className="min-h-screen">
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        <GlobalModal />
        </ThemeProvider>
        </body>
    </html>
  );
}
