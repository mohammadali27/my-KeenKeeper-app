import Image from "next/image";

const AllFriendsData = async function () {
  const res = await fetch("https://my-keen-keeper-app.vercel.app/friend.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const newPage = async ({ params }) => {
  const apps = await AllFriendsData();
  const { id } = await params;

  console.log(apps);
  //   const app = friends;
  const app = apps.find((app) => String(app.id) === id);
  console.log("ditiles page", app);

  return (
    <div className="container mx-auto mb-5 mt-5">
      <div className="gap-3 ">
        <div key={app.id} className=" grid grid-cols-4 grid-rows-4 whitespace-nowrap justify-around gap-5  text-center">
          <div className=" shadow-sm  ">
            <Image
              className="  mx-auto"
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
          <div className="shadow-sm items-center justify-center">
            <p>{app.days_since_contact}</p>
            <p>days_since_contact</p>
          </div>
          <div className="shadow-sm">
            <p>{app.goal}</p>
            <p>Goal (Days)</p>
          </div>
          <div className="shadow-sm">
            <p>{app.next_due_date}</p>
            <p>Next Due</p>
          </div>
          <div className="shadow-sm">
            <p>{app.next_due_date}</p>
            <p>Next Due</p>
          </div>
          <div className="shadow-sm">
            <p>{app.next_due_date}</p>
            <p>Next Due</p>
          </div>
          <div className="shadow-sm col-span-1">
            <p>{app.next_due_date}</p>
            <p>Next Due</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newPage;
