import React, { useEffect, useState } from "react";
import Portal from "./Portal";
import Image from "next/image";
import Search from "./Search";
import useHorizontalScroll from "@/utils/horizontalScroll";

interface SearchPageProps {
  onDismiss: () => void;
}

const SearchPage = ({ onDismiss }: SearchPageProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(onDismiss, 100);
  };

  const horizontalScrollDivRef = useHorizontalScroll();

  return (
    <Portal>
      <div className="mb-[54px] absolute top-0 bottom-0 left-0 right-0 w-[393px] mx-auto overflow-hidden">
        <div
          className={`bg-main-bg h-full overflow-y-auto no-scrollbar px-2 pt-6 transition-transform duration-200 ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex gap-1 mb-6">
            <button onClick={handleDismiss}>
              <Image
                width={24}
                height={24}
                src="/icons/mono_arrow_left.svg"
                alt="arrow left"
              />
            </button>
            <Search />
          </div>
          <div
            className={`transition-opacity duration-300 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="font-bold">popular options</h3>
            <div
              ref={horizontalScrollDivRef}
              className="grid grid-flow-col gap-2 my-6 overflow-x-auto no-scrollbar"
            >
              <OptionButton option="country1" />
              <OptionButton option="blogger1" />
              <OptionButton option="creator2" />
              <OptionButton option="country2" />
            </div>
          </div>
          <div
            className={`transition-opacity duration-300 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="font-bold">popular country</h3>
            <div className="grid grid-flow-row gap-6 my-6">
              <CountryButton country="Canada" />
              <CountryButton country="America" />
              <CountryButton country="Korea" />
              <CountryButton country="Japan" />
            </div>
          </div>
          <div
            className={`transition-opacity duration-500 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="font-bold">popular blogger & creator</h3>
            <div className="grid grid-flow-row gap-6 my-6">
              <BloggerButton blogger="Talan Bergson" />
              <BloggerButton blogger="Marley Korsgard" />
              <BloggerButton blogger="Mars Saris" />
              <BloggerButton blogger="Cristofer Sars" />
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default SearchPage;

const OptionButton = ({ option }: { option: string }) => {
  const handleCountryClick = () => {
    console.log(option);

    // handle navigate to result page
  };

  return (
    <button
      className="bg-[#A6B1E1] py-2 px-4 rounded-full text-white font-bold w-fit leading-none"
      onClick={handleCountryClick}
    >
      {option}
    </button>
  );
};

const CountryButton = ({ country }: { country: string }) => {
  const handleCountryClick = () => {
    console.log(country);

    // handle navigate to result page
  };

  return (
    <button
      onClick={handleCountryClick}
      className="text-left flex gap-[12px] ml-2"
    >
      <Image
        width={24}
        height={24}
        src="/icons/mono_location.svg"
        alt="location"
      />
      {country}
    </button>
  );
};

const BloggerButton = ({ blogger }: { blogger: string }) => {
  const handleBloggerClick = () => {
    console.log(blogger);

    // handle navigate to result page
  };

  return (
    <button
      onClick={handleBloggerClick}
      className="text-left flex gap-[12px] ml-2 items-center"
    >
      <Image
        width={40}
        height={40}
        src="/icons/thumbnail_example.svg"
        alt="thumbnail"
      />
      {blogger}
    </button>
  );
};
