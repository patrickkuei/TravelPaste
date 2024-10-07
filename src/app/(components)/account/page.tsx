"use client";

import Image from "next/image";
import React from "react";
import PageContainer from "../PageContainer";

const page = () => {
  return (
    <PageContainer className="[&&]:gap-0 divide-y-2 divide-[#a6b1e138]">
      <div className="h-[68px] leading-[68px] flex items-center gap-6 p-3">
        <Image
          width={40}
          height={40}
          src="/icons/thumbnail_example.svg"
          alt="account"
        />
        Lydia Donin
      </div>
      <AccountButton
        title="Personal info"
        leadingIcon={
          <Image
            width={24}
            height={24}
            src="/icons/mono_personal_info.svg"
            alt="account"
          />
        }
      />
      <AccountButton
        title="Log in & security"
        leadingIcon={
          <Image
            width={24}
            height={24}
            src="/icons/mono_lock.svg"
            alt="account"
          />
        }
      />
      <AccountButton
        title="Notifications"
        leadingIcon={
          <Image
            width={24}
            height={24}
            src="/icons/mono_bell.svg"
            alt="account"
          />
        }
      />
      <AccountButton
        title="privacy & sharing"
        leadingIcon={
          <Image
            width={24}
            height={24}
            src="/icons/mono_eye.svg"
            alt="account"
          />
        }
      />
      <AccountButton
        title="Setting"
        leadingIcon={
          <Image
            width={24}
            height={24}
            src="/icons/mono_setting.svg"
            alt="account"
          />
        }
      />
      <AccountButton
        title="Log out"
        leadingIcon={
          <Image
            width={24}
            height={24}
            src="/icons/mono_logout.svg"
            alt="account"
          />
        }
      />
    </PageContainer>
  );
};

export default page;

const AccountButton = ({
  title,
  leadingIcon,
}: {
  title: string;
  leadingIcon: React.ReactNode;
}) => {
  const handleClick = () => {
    // Navigate to correspond page

    console.log(title);
  };

  return (
    <div
      className="h-[68px] leading-[68px] flex items-center gap-3 p-3 relative after:transition-all after:duration-500 after:content-[''] after:absolute after:left-[-10%] after:h-full after:bg-[#42487436] after:w-[300%] after:opacity-0 active:after:w-0 active:after:opacity-100 active:after:transition-none active:after:duration-0"
      onClick={handleClick}
    >
      {leadingIcon}
      {title}
    </div>
  );
};
