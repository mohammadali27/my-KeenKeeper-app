"use client";

import { InstallAppsContext } from "@/context/install.context";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsPage = () => {
  const { installedApp, setInstalledApp, timeline, setTimeline } =
    useContext(InstallAppsContext);
  const callCount = timeline.filter((Count) => Count.type === "Call").length;
  const textCount = timeline.filter((Count) => Count.type === "Text").length;
  const videoCount = timeline.filter((Count) => Count.type === "Video").length;

  const data = [
    { name: "Call", value: callCount, fill: "#244d3f" },
    { name: "Text", value: textCount, fill: "#7f37f5" },
    { name: "Video", value:videoCount , fill: "#37a163" },
  ];
  return (
    <div className="my-10 p-10 border border-[#ddd] rounded-md container mx-auto">
      <p className="text-3xl font-bold text-center mb-5">
        Friendship Analytics
      </p>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default StatsPage;
