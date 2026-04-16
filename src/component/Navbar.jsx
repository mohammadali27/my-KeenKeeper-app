"use client"
import Navlink from "@/component/Navlink/page";


const Navbar = ({}) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">KeenKeeper</a>
      </div>
      <div className="flex-none">
        <Navlink></Navlink>
        
      </div>
    </div>
  );
};

export default Navbar;
