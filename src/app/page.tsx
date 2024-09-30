"use client";

import Post from "./Post";
import MockPosts from "@/mocks/mockPosts";
import Search from "./Search";
import { useEffect, useRef, useState } from "react";

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

  return (
    <div className="mt-[56px] mb-[54px] overflow-y-auto w-full p-4 flex flex-col gap-4">
      <Search />
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
    </div>
  );
}
