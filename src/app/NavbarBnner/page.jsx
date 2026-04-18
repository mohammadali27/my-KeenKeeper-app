import React from "react";
import { IoMdAdd } from "react-icons/io";



const NavbarBanner = ({app= []}) => {
  const totalFriend =app.length;
  const onTrack=app.filter(sta=> sta.status === "active").length;
  const NeedAttention=app.filter(Need=> Need.status === "Need_Attention").length;
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
        <button className=" flex mx-auto items-center justify-center bg-[#244d3f] text-white p-2 btn mt-5">
          <IoMdAdd />
          Add a Friend
        </button>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 justify-around gap-3 mt-10 ">
        <div className=" outline outline-fuchsia-100 px-10 py-5">
          <h3 className=" text-center">{totalFriend}</h3>
          <p>Total Friends</p>
        </div>
        <div className="outline outline-fuchsia-100 px-10 py-5">
          <h3 className=" text-center">{onTrack}</h3>
          <p>On Track</p>
        </div>
        <div className="outline outline-fuchsia-100 px-10 py-5">
          <h3 className=" text-center">{NeedAttention}</h3>
          <p>Need Attention</p>
        </div>
        <div className="outline outline-fuchsia-100 px-10 py-5 ">
          <h3 className=" text-center">12</h3>
          <p>Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarBanner;
