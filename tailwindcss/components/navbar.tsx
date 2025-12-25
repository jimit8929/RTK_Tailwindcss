//Tailwindcss Section
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const links = [
    {
      title: "Guide",
      href: "/guide",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Login",
      href: "/login",
    },
  ];

  return (
    <div className="flex items-center justify-between py-4 px-4 backdrop-blur-md sticky top-0 z-50">
      <Link href="/">
        <Image
          src="/finta-logo-light.svg"
          height={100}
          width={100}
          alt="logo"
          draggable={false}
          loading="lazy"
        />
      </Link>

      <div className="flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="text-neutral-800 font-medium hover:text-neutral-500 transition duration-200"
          >
            {link.title}
          </Link>
        ))}

        <button
          className="bg-[#2679F3] text-white px-4 py-2 rounded-lg font-bold
      shadow-lg text-shadow-md tracking-wide
      "
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
