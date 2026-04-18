"use client";
import { InstallAppsContext } from "@/context/install.context";
import { useContext } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { MdTextsms } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

const InstalCallButton = ({ app }) => {
  //  const notify = (type) => toast("call");
  const { installedApp, setInstalledApp, timeline, setTimeline } =
    useContext(InstallAppsContext);
  const addToTimeline = (type) => {
    const newEvent = {
      id: Date.now(),
      app,
      type,
      time: new Date().toLocaleString(),
    };

    setTimeline([newEvent, ...timeline]);
    setInstalledApp([...installedApp, app]);
    toast.success(`${type} started with ${app.name}`);
  };

  return (
    <>
      <div className=" text-left font-bold text-xl mt-10">
        <p>Quick Check-In</p>
      </div>
      <div className="flex items-center mx-auto gap-5  shadow-sm ">
        <div className="  ">
          <button onClick={() => addToTimeline("Call")} className="btn p-10">
            <FiPhoneCall /> Call
          </button>

          <button onClick={() => addToTimeline("Text")} className="btn p-10">
            <MdTextsms /> Text
          </button>

          <button onClick={() => addToTimeline("Video")} className="btn p-10">
            <IoVideocamOutline /> Video
          </button>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default InstalCallButton;
