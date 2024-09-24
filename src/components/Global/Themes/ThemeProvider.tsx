"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      themes={["light-theme", "dark-theme"]}
      defaultTheme="dark-theme"
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
