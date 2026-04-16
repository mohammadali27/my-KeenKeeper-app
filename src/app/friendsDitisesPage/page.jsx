import React from "react";

import Image from "next/image";

const AllFriendsData = async function () {
  const res = await fetch("https://my-keen-keeper-app.vercel.app/friend.json");
  const data = await res.json();
  return data;
};

const DitelsPage =async ({ params }) => {
    const app = await AllFriendsData();
  const { id } = params;
//   const app = friends;
  const apps = app.find((app) => app.id == Number(id));
  console.log("ditiles page", apps);
  return (
    <div className=" container mx-auto">
      <p className=" font-bold text-2xl mt-5 mb-5 ">Your Friends</p>

      <>
        <div className="  gap-3 ">
          {apps && (
            <div key={apps.id} className="">
              <div className="card shadow-sm">
                <div className="card-body items-center text-center">
                  <Image src={apps.picture} alt="" width={200} height={200} />
                  <h2 className="card-title">{apps.name}</h2>
                  <p>{apps.days_since_contact} ago</p>
                  <div className="badge badge-secondary">{apps.tags}</div>
                  <div className="badge badge-secondary">{apps.status}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default DitelsPage;
