"use client";

import { debounce } from "@/utils/debounce";
import { createContext, useContext, useState } from "react";

export const LayoutContext = createContext({});

export function useAppLayout() {
  const appLayoutContext = useContext(LayoutContext);

  if (!appLayoutContext) {
    throw new Error("useAppLayout should be used within <AppLayoutProvider>");
  }

  return appLayoutContext;
}

export function AppLayoutProvider({ children }: { children: React.ReactNode }) {
  const [isMobileView, setIsMobileView] = useState(false);
  const [showMenu, setShowMenu] = useState(isMobileView);

  typeof window !== "undefined" &&
    window.addEventListener(
      "resize",
      debounce(() => {
        setIsMobileView(
          typeof window !== "undefined" && window.innerWidth < 768
        );
      }, 1000)
    );

  return (
    <LayoutContext.Provider value={{ isMobileView, showMenu, setShowMenu }}>
      {children}
    </LayoutContext.Provider>
  );
}
