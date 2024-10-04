import { Data } from "@/mocks/mockPosts";
import { formatDate } from "@/utils/dateUtils";
import Image from "next/image";
import { SetStateAction } from "react";
import FavourateButton from "./FavourateButton";
import PostContent from "./PostContent";

type Props = {
  post: Data;
  updateData: (cb: SetStateAction<Data[]>) => void;
};

function Post({
  post: {
    id,
    author,
    account,
    isFavourate = false,
    title,
    content,
    likedCount,
    sharedCount,
    createdAt,
  },
  updateData,
}: Props) {
  const handleFavourateClick = () => {
    updateData((prev) => {
      const newData = prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isFavourate: !item.isFavourate,
            likedCount: item.isFavourate
              ? item.likedCount - 1
              : item.likedCount + 1,
          };
        }
        return item;
      });
      return newData;
    });
  };

  return (
    <div className="w-full relative shadow-[1px_1px_10px_rgba(177,163,204,0.75)] p-3 flex flex-col">
      <div className="absolute right-3 top-3 flex gap-2">
        <div className="flex flex-col justify-center items-center">
          <Image
            width={24}
            height={24}
            src="/icons/mono_share.svg"
            alt="icon"
          />
          <span>{sharedCount}</span>
        </div>
        <FavourateButton
          isFavourate={isFavourate}
          id={id}
          likedCount={likedCount}
          onClick={handleFavourateClick}
        />
      </div>
      <div className="flex gap-3 mb-4">
        <div className="flex justify-center items-center">
          <Image
            width={60}
            height={60}
            src="/icons/thumbnail_example.svg"
            alt="thumbnail"
          />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <h4>{author}</h4>
          <h4>{account}</h4>
        </div>
      </div>
      <div className="mb-2 text-[#B0B0B0] text-sm">{formatDate(createdAt)}</div>
      <div className="flex flex-col gap-2 h-full">
        <h4 className="truncate">{title}</h4>
        <PostContent content={content} />
      </div>
    </div>
  );
}

export default Post;
