import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialTumbler } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-[#244d3f]">
      <footer className="footer footer-horizontal footer-center  text-base-content rounded p-10  mt-20">
        <div className="">
          <h1 className=" text-5xl font-bold">KeenKeeper</h1>
          <p>
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <p>Social Links</p>
        </div>
        <nav className="flex gap-5">
          <FaInstagram className=" size-10" />
          <CiFacebook className=" size-10" />
          <FaXTwitter className=" size-10" />
        </nav>
      </footer>
      <aside className="p-10 justify-between flex ">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
        <ul className="flex gap-5">
          <li>Privacy Policy </li>
          <li> Terms of Service </li>
          <li>Cookies</li>
        </ul>
      </aside>
    </div>
  );
};

export default Footer;
