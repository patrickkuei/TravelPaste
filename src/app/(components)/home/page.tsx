"use client";

import MockPosts, { Data } from "@/mocks/mockPosts";
import Image from "next/image";
import {
  MouseEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import PageContainer from "../PageContainer";
import Post from "./Post";
import SearchPage from "./SearchPage";

export default function Home() {
  const [data, setData] = useState(MockPosts);
  const updateData = useCallback(
    (cb: SetStateAction<Data[]>) => setData(cb),
    []
  );
  const [loading, setLoading] = useState(false);
  const observerRef = useCallback(
    (node: HTMLDivElement) => {
      const observer = new IntersectionObserver(
        (entries) => {
          const target = entries[0];
          if (target.isIntersecting && !loading) {
            loadMoreData();
          }
        },
        { threshold: 1.0 }
      );

      if (node) {
        observer.observe(node);
      }
    },
    [loading]
  );

  const loadMoreData = () => {
    setLoading(true);
    setTimeout(() => {
      setData((prevData) => [
        ...prevData,
        ...MockPosts.map((post) => ({ ...post, id: crypto.randomUUID() })),
      ]);
      setLoading(false);
    }, 1000);
  };

  const [setShouldShowSearchPage, setSetShouldShowSearchPage] = useState(false);
  const [isSearchClick, setIsSearchClick] = useState(false);
  const timeoutId = useRef<ReturnType<typeof setTimeout>>();
  const handleSearchClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setSetShouldShowSearchPage(true);
    setIsSearchClick(true);

    timeoutId.current = setTimeout(() => {
      setIsSearchClick(false);
    }, 500);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, []);

  const handleCloseSearchPage = () => {
    setSetShouldShowSearchPage(false);
    setIsSearchClick(false);
  };

  return (
    <PageContainer>
      <div
        className={`flex bg-white py-1 rounded-[10px] ring-1 ring-inset ring-gray-200 text-[#9E9E9E] transition duration-150 ease-out ${
          isSearchClick ? "outline-none ring-1 ring-inset ring-gray-600" : ""
        }`}
        onClick={handleSearchClick}
      >
        <Image
          width={24}
          height={24}
          src="/icons/mono_search.svg"
          alt="search"
          className="ml-1 pointer-events-none"
        />
        Where do you plan to visit?
      </div>
      <h4 className="mb-[-8px]">
        <b>Popular recommendation</b>
      </h4>
      {data.map((post) => (
        <Post key={post.id} post={post} updateData={updateData} />
      ))}
      <div ref={observerRef} className="text-center p-4">
        {loading ? (
          <span className="animate-pulse text-gray-500">Loading more...</span>
        ) : (
          <span className="text-gray-500">Scroll to load more</span>
        )}
      </div>
      {setShouldShowSearchPage && (
        <SearchPage onDismiss={handleCloseSearchPage} />
      )}
    </PageContainer>
  );
}
