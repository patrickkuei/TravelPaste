"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const WishList = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`mt-[56px] mb-[54px] overflow-y-auto no-scrollbar w-full p-4 flex flex-col gap-4 transition-transform duration-200 ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <WishButton wish="Paris" />
      <WishButton wish="Japan" />
      <WishButton wish="Iceland" />
    </div>
  );
};

export default WishList;

const WishButton = ({ wish }: { wish: string }) => {
  const handleWishClick = () => {
    console.log(wish);

    // Navigate to post list with wish list
  };

  return (
    <div className="flex flex-col gap-1" onClick={handleWishClick}>
      <h4>Paris</h4>
      <Image
        src={`/thumbnails/${wish}.svg`}
        alt="Paris"
        sizes="100vw"
        width={0}
        height={0}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};
