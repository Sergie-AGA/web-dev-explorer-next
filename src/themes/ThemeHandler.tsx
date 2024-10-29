"use client";

import { ThemeProvider } from "next-themes";

interface IThemeHandlerProps {
  children: React.ReactNode;
}

export default function ThemeHandler({ children }: IThemeHandlerProps) {
  return (
    <ThemeProvider
      attribute="class"
      themes={["dark-theme", "light-theme"]}
      defaultTheme="dark-theme"
    >
      {children}
    </ThemeProvider>
  );
}
