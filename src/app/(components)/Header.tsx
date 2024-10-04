"use client";

import { routeNameMap } from "@/constants/routes";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 flex justify-center items-center w-inherit h-[56px]">
      <h1>{routeNameMap.get(pathname)}</h1>
    </div>
  );
};

export default Header;
