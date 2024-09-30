"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import MockPostRequest from "@/mocks/mockRequest";
import debounce from "@/utils/debounce";

type Props = { isFavourate: boolean; id: string; likedCount: number };

const FavourateButton = ({
  isFavourate: propIsFavourate,
  id: postId,
  likedCount,
}: Props) => {
  const [isFavourate, setIsFavourate] = useState(propIsFavourate);

  const setIsFavourateDebounce = useMemo(
    () =>
      debounce(async () => {
        try {
          const res = await MockPostRequest(postId);

          console.log(res);
        } catch (error) {
          console.error(error);
        }
      }, 500),
    [postId]
  );

  const handleFavourateClick = () => {
    setIsFavourate((prev) => !prev);
    setIsFavourateDebounce();
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
