import React from "react";
import { IoMdAdd } from "react-icons/io";

const NavbarBanner = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-5 mb-5">
        Friends to keep close in your life
      </h1>
      <p className="text-center">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <div className=" ">
        <button className=" flex mx-auto items-center justify-center bg-green-600 text-white p-2 btn mt-5">
          <IoMdAdd />
          Add a Friend
        </button>
      </div>
      <div className=" flex justify-around gap-3 mt-10 ">
        <div className=" outline outline-fuchsia-100 px-10 py-5">
          <h3 className=" text-center">10</h3>
          <p>Total Friends</p>
        </div>
        <div className="outline outline-fuchsia-100 px-10 py-5">
          <h3 className=" text-center">10</h3>
          <p>Total Friends</p>
        </div>
        <div className="outline outline-fuchsia-100 px-10 py-5">
          <h3 className=" text-center">10</h3>
          <p>Total Friends</p>
        </div>
        <div className="outline outline-fuchsia-100 px-10 py-5 ">
          <h3 className=" text-center">10</h3>
          <p>Total Friends</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarBanner;
