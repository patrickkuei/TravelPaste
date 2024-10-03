import useAutoVisible from "@/utils/useAutoVisible";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const PageContainer = ({ children, className: propClassName }: Props) => {
  const baseClassName = `mt-[56px] mb-[54px] overflow-y-auto no-scrollbar w-full p-4 flex flex-col gap-4 transition-transform duration-200 translate-x-0 ${propClassName}`;
  const isVisible = useAutoVisible();

  return (
    <div
      className={`${baseClassName} ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
