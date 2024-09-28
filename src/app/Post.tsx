import Image from "next/image";
import React from "react";

type Props = {
  author: string;
  account: string;
  isFavourate?: boolean;
  title: string;
  content: string;
};

function Post({ author, account, isFavourate = false, title, content }: Props) {
  return (
    <div className="w-full min-h-[340px] relative shadow-[1px_1px_10px_rgba(177,163,204,0.75)] p-3 flex flex-col">
      <div className="absolute right-3 top-3 flex gap-2">
        <Image width={24} height={24} src="/icons/mono_share.svg" alt="icon" />
        <Image width={24} height={24} src="/icons/mono_heart.svg" alt="icon" />
      </div>
      <div className="flex gap-3 mb-6">
        <div className="h-[60px] w-[60px] bg-slate-100 flex justify-center items-center">
          avatar img
        </div>
        <div className="flex flex-col justify-center gap-1">
          <div>auther name</div>
          <div>auther account</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 h-full pb-9">
        <h4 className="truncate">{title}</h4>
        <p className="line-clamp-6">{content}</p>
      </div>
      <div className="absolute bottom-3 right-3">
        <button className="text-[10px] bg-primary-1 text-white px-4 py-2 rounded-full font-bold">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Post;
