import Link from "next/link";
import React from "react";
import { FaBtc } from "react-icons/fa";

const Navbar = () => {
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
            className="text-blue-400 hover:text-blue-800 transition-colors"
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
