"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ButtonProps {
  href: string;
  title?: string;
  className?: string;
  iconSrc?: string;
}

function Button({
  href,
  title,
  className: propClassName,
  iconSrc,
}: ButtonProps) {
  const className = `flex flex-col items-center justify-center text-[10px] grow relative w-full h-full active:bg-[#42487436] ${propClassName}`;

  return (
    <Link className={className} href={href}>
      {iconSrc && <Image src={iconSrc} alt="icon" width={24} height={24} />}
      {title}
    </Link>
  );
}

function Footer() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 flex justify-center items-center w-inherit h-[53px] bg-section-bg">
      <Button
        href="/"
        title="Home"
        iconSrc={`/icons/mono_home${pathname === "/" ? "_fill" : ""}.svg`}
      />
      <Button
        href="/wishlist"
        title="Next Journey"
        iconSrc={`/icons/mono_heart${
          pathname === "/wishlist" ? "_fill" : ""
        }.svg`}
      />
      <Button
        href="/posts"
        title="Posts"
        iconSrc={`/icons/mono_edit${pathname === "/posts" ? "_fill" : ""}.svg`}
      />
      <Button
        href="/account"
        title="Profile"
        iconSrc={`/icons/mono_account${
          pathname === "/account" ? "_fill" : ""
        }.svg`}
      />
    </div>
  );
}

export default Footer;
