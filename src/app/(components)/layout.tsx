import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex justify-center w-screen h-screen overflow-hidden select-none">
      <div className="flex justify-center w-[393px] bg-main-bg overflow-hidden">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
