"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdOutlineHome, MdTimeline } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";

const Navlink = ({}) => {
  const Pathname = usePathname();
  return (
    <div>
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link
            href="/"
            className={
              Pathname === "/"
                ? "btn bg-[#1A77F2] text-white border-[#005fd8]"
                : "btn bg-white text-black border-[#e5e5e5]"
            }
          >
            <MdOutlineHome size={20} />
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/timeline"
            className={
              Pathname === "/timeline"
                ? "btn bg-[#1A77F2] text-white border-[#005fd8]"
                : "btn bg-white text-black border-[#e5e5e5]"
            }
          >
            <RiTimeLine size={20} />
            Timeline
          </Link>
        </li>
        <li>
          <Link
            href="/stats"
            className={
              Pathname === "/stats"
                ? "btn bg-[#1A77F2] text-white border-[#005fd8]"
                : "btn bg-white text-black border-[#e5e5e5]"
            }
          >
            <MdTimeline size={20} />
            Stats
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlink;
