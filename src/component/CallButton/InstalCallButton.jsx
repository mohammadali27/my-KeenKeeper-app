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
    <div className="flex items-center shadow-sm gap-5">
      <button onClick={() => addToTimeline("Call")} className="btn">
        <FiPhoneCall /> Call
        
      </button>

      <button onClick={() => addToTimeline("Text")} className="btn">
        <MdTextsms /> Text
         
      </button>

      <button onClick={() => addToTimeline("Video")} className="btn">
        <IoVideocamOutline /> Video
       
      </button>
      <ToastContainer/>
    </div>
  );
};

export default InstalCallButton;
