"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import PostSkeleton from "./PostSkeleton";

type Props = {
  content: string;
};

function PostContent({ content: propContent }: Props) {
  const contentRef = useRef(null);
  const readMoreRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    if (contentRef.current) {
      const pElement = contentRef.current as HTMLParagraphElement;
      const readMoreElement = readMoreRef.current as unknown as HTMLSpanElement;

      if (pElement.clientHeight < pElement.scrollHeight) {
        readMoreElement.style.display = "inline";
      }
    }

    setIsLoading(false);
  }, []);

  const handleReadMore = () => {
    if (contentRef.current) {
      const pElement = contentRef.current as HTMLParagraphElement;
      pElement.style.maxHeight = "none";
      pElement.classList.remove("line-clamp-6");
      const readMoreElement = readMoreRef.current as unknown as HTMLSpanElement;
      readMoreElement.style.display = "none";
    }
  };

  return (
    <>
      {isLoading && <PostSkeleton />}
      <p
        ref={contentRef}
        className={`text-sm line-clamp-6 max-h-[180px] ${
          isLoading ? "invisible" : ""
        }`}
      >
        {propContent}
      </p>
      <span
        ref={readMoreRef}
        className="text-sm text-[#B0B0B0] hidden"
        onClick={handleReadMore}
      >
        Read More
      </span>
    </>
  );
}

export default PostContent;
