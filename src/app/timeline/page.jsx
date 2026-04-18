"use client";
import { InstallAppsContext } from "@/context/install.context";
import React, { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const Timeline = () => {
  const { timeline } = useContext(InstallAppsContext);
  const [filter, setFilter] = useState("All");

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="w-8/12 mx-auto space-y-5 mb-5">
      <h1 className="text-3xl font-bold">Timeline</h1>

      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn m-1">
          Filter timeline <FaAngleDown />
        </div>

        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li onClick={() => setFilter("All")}>
            <a> All</a>
          </li>
          <li onClick={() => setFilter("Call")}>
            <a>Call</a>
          </li>
          <li onClick={() => setFilter("Text")}>
            <a>Text</a>
          </li>
          <li onClick={() => setFilter("Video")}>
            <a>Video</a>
          </li>
        </ul>
      </div>
      {filteredTimeline.length === 0 ? (
        <p className="text-gray-500">No activity yet</p>
      ) : (
        filteredTimeline.map((item) => (
          <div key={item.id} className="border p-3 rounded">
            <h2 className="font-semibold">
              {item.type} with <span>{item.app?.name || "Unknown"}</span>
            </h2>
            <p>{item.time}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Timeline;
