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
    <div className="container mx-auto">
      <p className="font-bold text-2xl mt-5 mb-5">Your Friends</p>

      <div className="gap-3">
        <div key={app.id} className="">
          <div className="card shadow-sm">
            <div className="card-body items-center text-center">
              <Image src={app.picture} alt="" width={200} height={200} />

              <h2 className="card-title">{app.name}</h2>
              
              <p> ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newPage;
