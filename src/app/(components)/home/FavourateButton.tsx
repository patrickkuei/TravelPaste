"use client";

import MockPostRequest from "@/mocks/mockRequest";
import useDebounce from "@/utils/useDebounce";
import Image from "next/image";
import { useCallback } from "react";

type Props = {
  isFavourate: boolean;
  id: string;
  likedCount: number;
  onClick: () => void;
};

const FavourateButton = ({
  isFavourate,
  id: postId,
  likedCount,
  onClick,
}: Props) => {
  const postFavorateData = useCallback(async () => {
    try {
      const res = await MockPostRequest(postId, !isFavourate);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }, [isFavourate, postId]);

  const toggleFavourateDebounce = useDebounce(postFavorateData, 500);

  const handleFavourateClick = () => {
    onClick();
    toggleFavourateDebounce();
  };

  return (
    <button onClick={handleFavourateClick}>
      <Image
        width={24}
        height={24}
        src={`/icons/mono_heart${isFavourate ? "_fill" : ""}.svg`}
        alt="icon"
      />
      <span>{likedCount}</span>
    </button>
  );
};

export default FavourateButton;
