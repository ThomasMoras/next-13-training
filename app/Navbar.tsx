"use client";

import Link from "next/link";
import React from "react";
import { FaBtc } from "react-icons/fa";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  const linkArray = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link className="" href="/">
        <FaBtc size={25}></FaBtc>
      </Link>
      <ul className="flex space-x-6 ">
        {linkArray.map((link) => (
          <li
            className={classnames({
              "text-blue-900 underline": link.href === currentPath,
              "text-blue-500": link.href != currentPath,
              "hover:text-blue-800 transition-colors": true,
            })}
            key={link.href}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
