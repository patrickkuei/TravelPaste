"use client";

import React, { useRef } from "react";
import Image from "next/image";

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputClick = () => {
    inputRef?.current?.click();
  };

  return (
    <div
      className="relative flex flex-1 items-center"
      onClick={handleInputClick}
    >
      <Image
        width={24}
        height={24}
        src="/icons/mono_search.svg"
        alt="search"
        className="absolute ml-1 pointer-events-none"
      />
      <input
        ref={inputRef}
        type="text"
        name="search"
        placeholder="Where do you plan to visit"
        className="rounded-[10px] pl-8 py-1 w-full ring-1 ring-inset ring-gray-200 transition duration-200 ease-out focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gray-600 autofill:outline-none autofill:ring-1 autofill:ring-inset autofill:ring-gray-600"
      />
    </div>
  );
};

export default Search;
