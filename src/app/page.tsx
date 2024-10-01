"use client";

import Post from "./Post";
import MockPosts from "@/mocks/mockPosts";
import { MouseEvent, useEffect, useRef, useState } from "react";
import SearchPage from "./SearchPage";
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState(MockPosts);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !loading) {
          loadMoreData();
        }
      },
      { threshold: 1.0 }
    );

    const currentObserverRef = observerRef.current;

    if (currentObserverRef) {
      observer.observe(currentObserverRef);
    }

    return () => {
      if (currentObserverRef) {
        observer.unobserve(currentObserverRef);
      }
    };
  }, [loading]);

  const loadMoreData = () => {
    setLoading(true);
    setTimeout(() => {
      setData((prevData) => [...prevData, ...MockPosts]);
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
    <div className="mt-[56px] mb-[54px] overflow-y-auto no-scrollbar w-full p-4 flex flex-col gap-4">
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
        <Post key={post.id} post={post} />
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
    </div>
  );
}
