import Link from "next/link";
import { MdOutlineHome, MdTimeline } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">KeenKeeper</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">
              <MdOutlineHome size={20} />
            Home
            </Link>
          </li>
          <li>
            <Link href="/">
              <RiTimeLine size={20} />Timeline
            </Link>
          </li>
          <li>
            <Link href="/">
              <MdTimeline size={20} />Stats
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
