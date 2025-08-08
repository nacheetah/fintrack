"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

const useNavigation = () => {
  const path = usePathname();
  const pathName = path.split("/")[1];
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    setActiveRoute(pathName);
  }, [path]);

  return activeRoute;
};

export default useNavigation;
