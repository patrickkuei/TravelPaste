"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Entry = () => {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => router.replace("/login"), 3000);
    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <h1 className="flex items-center font-mono overflow-hidden pr-2 relative after:absolute after:left-0 after:w-full after:h-3/4 after:bg-white after:border-l-2 after:animate-typing">
        Travel
        <span className="text-[#DCD6F7] font-bold">Paste</span>
      </h1>
    </div>
  );
};

export default Entry;
