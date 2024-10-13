"use client";

import Image from "next/image";
import PageContainer from "../PageContainer";

const WishList = () => {
  return (
    <PageContainer>
      <WishButton wish="Paris" />
      <WishButton wish="Japan" />
      <WishButton wish="Iceland" />
    </PageContainer>
  );
};

export default WishList;

const WishButton = ({ wish }: { wish: string }) => {
  const handleWishClick = () => {
    console.log(wish);

    // Navigate to post list with wish list
  };

  return (
    <div className="flex flex-col gap-1" onClick={handleWishClick}>
      <h4>{wish}</h4>
      <Image
        src={`/thumbnails/${wish}.svg`}
        alt="Paris"
        sizes="100vw"
        width={0}
        height={0}
        className="w-full h-auto"
      />
    </div>
  );
};
