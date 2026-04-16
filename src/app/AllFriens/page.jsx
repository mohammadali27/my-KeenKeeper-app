import { Suspense } from "react";
import Image from "next/image";
import NavbarBanner from "../NavbarBnner/page";
// import friends from "@/component/data/friend.json";
import Link from "next/link";

const AllFriendsData = async function () {
  const res = await fetch("https://my-keen-keeper-app.vercel.app/friend.json");
  const data = await res.json();
  return data;
};

const AllFriends = async () => {
  // const app = friends;
  const app =await AllFriendsData();
  const Getstutas = (status) => {
    switch (status) {
      case "active":
        return "badge-success";
      case "overdue":
        return "badge-error";
      case "Need_Attention":
        return "badge-info";
      default:
        return "badge-warning";
    }
  };

  return (
    <div className=" container mx-auto">
      <NavbarBanner app={app} />
      <p className=" font-bold text-2xl mt-5 mb-5 ">Your Friends</p>

      <>
        <div className=" grid grid-cols-4 mx-auto gap-3 ">
          {app.map((friend) => (
            <Link key={friend.id} href="/friendsDitisesPage">
              <div className="">
                <div className="card shadow-sm">
                  <div className="card-body items-center text-center">
                    <Image
                      src={friend.picture}
                      alt=""
                      width={200}
                      height={200}
                    />
                    <h2 className="card-title">{friend.name}</h2>
                    <p>{friend.days_since_contact} ago</p>
                    <div className="badge badge-secondary">{friend.tags}</div>
                    <div className={`badge ${Getstutas(friend.status)}`}>
                      {friend.status}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </>
    </div>
  );
};

export default AllFriends;
