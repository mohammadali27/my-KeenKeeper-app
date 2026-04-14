import React from "react";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center  text-base-content rounded p-10 bg-[#244d3f] mt-20">
      <div className="">
        <h1 className=" text-5xl font-bold">KeenKeeper</h1>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <p>Social Links</p>
      </div>
      <nav>
        <CiFacebook />
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
