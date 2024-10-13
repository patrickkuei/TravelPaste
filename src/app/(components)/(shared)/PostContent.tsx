"use client";

import { useCallback, useRef } from "react";

type Props = {
  content: string;
};

function PostContent({ content: propContent }: Props) {
  const contentRef = useRef<HTMLParagraphElement | null>(null);
  const contentRefCallBack = useCallback((node: HTMLParagraphElement) => {
    if (node) {
      contentRef.current = node;
    }
  }, []);

  const readMoreRefCallBack = useCallback((node: HTMLSpanElement) => {
    if (node) {
      const pElement = contentRef.current as HTMLParagraphElement;
      if (pElement.clientHeight < pElement.scrollHeight) {
        node.style.display = "inline";
      }

      node.onclick = () => {
        pElement.style.maxHeight = "none";
        pElement.classList.remove("line-clamp-6");
        node.style.display = "none";
      };
    }
  }, []);

  return (
    <>
      <p
        ref={contentRefCallBack}
        className={`text-sm line-clamp-6 max-h-[180px]`}
      >
        {propContent}
      </p>
      <span
        ref={readMoreRefCallBack}
        className="text-sm text-[#B0B0B0] hidden hover:cursor-pointer w-fit"
      >
        Read More
      </span>
    </>
  );
}

export default PostContent;
