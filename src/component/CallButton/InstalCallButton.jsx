"use client";
import { InstallAppsContext } from "@/context/install.context";
import { useContext } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { MdTextsms } from "react-icons/md";

const InstalCallButton = ({ app }) => {
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
    </div>
  );
};

export default InstalCallButton;
