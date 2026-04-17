"use client";
import { InstallAppsContext } from "@/context/install.context";
import React, { useContext } from "react";

const Timeline = () => {
  const { timeline } = useContext(InstallAppsContext);

  return (
    <div className="w-8/12 mx-auto space-y-5 mb-5">
      <h1 className="text-3xl font-bold">Timeline</h1>

      {timeline.length === 0 ? (
        <p className="text-gray-500">No activity yet</p>
      ) : (
        timeline.map((item) => (
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