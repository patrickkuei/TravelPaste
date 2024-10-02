import { useCallback } from "react";

function useHorizontalScroll() {
  const ref = useCallback((node: HTMLDivElement) => {
    if (node) {
      node.addEventListener("wheel", (e) => {
        const isScrollable = node.scrollWidth > node.clientWidth;
        if (isScrollable) {
          e.preventDefault();
          node.scrollLeft += e.deltaY;
        }
      });
    }
  }, []);
  return ref
}

export default useHorizontalScroll;