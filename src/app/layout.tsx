import "../styles/global.css";
import { Open_Sans, Source_Code_Pro } from "next/font/google";
import ThemeHandler from "@/themes/ThemeHandler";
import GlobalModal from "@/components/Modals/GlobalModal/GlobalModal";

const openSans = Open_Sans({ subsets: ["latin"] });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "Web Dev Explorer",
  description: "Exploring features of Web Development",
  icons: {
    icon: "/Logo.svg",
  },
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
        <ThemeHandler>
          {children}
          <GlobalModal />
        </ThemeHandler>
      </body>
    </html>
  );
}
