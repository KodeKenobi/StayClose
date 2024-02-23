"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      className="hidden md:block cursor-pointer"
      src="/images/staylogo.png"
      height="200"
      width="160"
      alt="Logo"
    />
  );
};

export default Logo;
