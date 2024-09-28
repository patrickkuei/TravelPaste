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
  return (
    <Link className={propClassName} href={href}>
      {iconSrc && <Image src={iconSrc} alt="icon" width={24} height={24} />}
      {title}
    </Link>
  );
}

function Footer() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 flex gap-16 justify-center items-center w-inherit h-[53px] bg-section-bg">
      <Button
        href="/"
        className="flex flex-col items-center text-[10px]"
        title="Home"
        iconSrc={`/icons/mono_home${pathname === "/" ? "_fill" : ""}.svg`}
      />
      <Button
        href="/wishlist"
        className="flex flex-col items-center text-[10px]"
        title="Next Journey"
        iconSrc={`/icons/mono_heart${
          pathname === "/wishlist" ? "_fill" : ""
        }.svg`}
      />
      <Button
        href="/posts"
        className="flex flex-col items-center text-[10px]"
        title="Posts"
        iconSrc={`/icons/mono_edit${pathname === "/posts" ? "_fill" : ""}.svg`}
      />
      <Button
        href="/account"
        className="flex flex-col items-center text-[10px]"
        title="Profile"
        iconSrc={`/icons/mono_account${
          pathname === "/account" ? "_fill" : ""
        }.svg`}
      />
    </div>
  );
}

export default Footer;
