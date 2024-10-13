"use client";

import MockPosts from "@/mocks/mockPosts";
import { formatDate } from "@/utils/dateUtils";
import Image from "next/image";
import PostContent from "../(shared)/PostContent";
import PageContainer from "../PageContainer";

const page = () => {
  return (
    <PageContainer className="relative">
      {MockPosts.map((post) => (
        <div
          key={post.id}
          className="w-full shadow-[1px_1px_10px_rgba(177,163,204,0.75)] flex flex-col"
        >
          <div className="p-3">
            <div className="flex gap-3 mb-4">
              <div className="flex justify-center items-center">
                <Image
                  width={40}
                  height={40}
                  src="/icons/thumbnail_example.svg"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <h4>my name</h4>
              </div>
            </div>
            <div className="mb-2 text-[#B0B0B0] text-sm">
              {formatDate(post.createdAt)}
            </div>
            <div className="flex flex-col gap-2 h-full">
              <h4 className="truncate">{post.title}</h4>
              <PostContent content={post.content} />
            </div>
          </div>
          <div className="flex justify-between bg-[#dcd6f73b] border-t border-[#a6b1e148]">
            <div className="flex gap-2 p-4">
              <Image
                width={24}
                height={24}
                src={`/icons/mono_heart_fill.svg`}
                alt="icon"
              />
              <span>{post.likedCount}</span>
            </div>
            <div className="flex items-center">
              <span className="active:bg-[#bfb9dd8f] px-3 h-full flex items-center hover:cursor-pointer">
                <Image
                  width={24}
                  height={24}
                  src="/icons/mono_share.svg"
                  alt="icon"
                />
              </span>
              <span className="active:bg-[#bfb9dd8f] px-3 h-full  flex items-center hover:cursor-pointer">
                <Image
                  width={24}
                  height={24}
                  src="/icons/mono_self_edit.svg"
                  alt="icon"
                />
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className="sticky bottom-0 left-full w-[50px] min-h-[50px] flex justify-center items-center bg-white rounded-full shadow-[1px_1px_10px_rgba(0,0,0,0.3)] active:bg-[#e7e7ea] hover:cursor-pointer">
        <Image
          src="/icons/mono_add.svg"
          alt="icon"
          width={24}
          height={24}
          draggable={false}
        />
      </div>
    </PageContainer>
  );
};

export default page;
