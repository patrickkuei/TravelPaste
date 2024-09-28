"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { routeNameMap } from "@/constants/routes";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 flex justify-center items-center w-inherit h-[56px]">
      {routeNameMap.get(pathname)}
    </div>
  );
};

export default Header;
