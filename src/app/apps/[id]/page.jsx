import InstalCallButton from "@/component/CallButton/InstalCallButton";
import Image from "next/image";
import { FaBoxArchive } from "react-icons/fa6";

import { MdDelete } from "react-icons/md";
import { RiNotificationSnoozeFill } from "react-icons/ri";

const AllFriendsData = async function () {
  const res = await fetch(
    "https://my-keen-keeper-app.vercel.app/friend.json",
    {},
  );
  const data = await res.json();
  return data;
};

const newPage = async ({ params }) => {
  const apps = await AllFriendsData();
  const { id } = await params;

  // console.log(apps);
  //   const app = friends;
  const app = apps.find((app) => String(app.id) === id);
  // console.log("ditiles page", app);

  return (
    <div className=" container mx-auto items-center mt-5 mb-5  ">
      <div key={app.id} className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 text-center">
        <div className="items-center shadow-sm space-y-5">
          <div className="grid  justify-center   mx-auto ">
            <Image
              className="mx-auto"
              src={app.picture}
              alt=""
              width={200}
              height={200}
            />
            <p>{app.name}</p>
            <p>{app.status}</p>
            <p>{app.tags}</p>
            <p>{app.bio}</p>
            <p>{app.email}</p>
          </div>
          <div className=" grid grid-rows-3 ">
            <button className="btn">
              <RiNotificationSnoozeFill />
              Snooze 2 weeks
            </button>
            <button className="btn ">
              <FaBoxArchive />
              Archive
            </button>
            <button className="btn btn-error ">
              <MdDelete />
              Delete
            </button>
          </div>
        </div>
        <div className="grid grid-rows-1 col-span-2 h-100">
          <div className=" flex justify-between items-center">
            <div className=" shadow-sm p-10">
              <p>{app.days_since_contact}</p>
              <p>days_since_contact</p>
            </div>
            <div className="shadow-sm  p-10">
              <p>{app.goal}</p>
              <p>Goal (Days)</p>
            </div>
            <div className="shadow-sm  p-10">
              <p>{app.next_due_date}</p>
              <p>Next Due</p>
            </div>
          </div>
          <div className="flex justify-between text-center p-2 shadow-sm">
            <div className="">
              <p>Relationship Goal</p>
              <p>Connect every 30 days</p>
            </div>
            <button className="flex btn">Edit</button>
          </div>
          <div className="">
            <InstalCallButton app={app} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default newPage;
