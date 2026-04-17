"use client";
import { children, createContext, useState } from "react";

export const InstallAppsContext = createContext();
const InstslledAppProvider = ({ children }) => {
  const [installedApp, setInstalledApp] = useState([]);
  const [timeline, setTimeline] = useState([]);

  const data = {
    installedApp,
    setInstalledApp,
  };

  return (
    <InstallAppsContext.Provider
      value={{
        installedApp,
        setInstalledApp,
        timeline,
        setTimeline,
      }}
    >
      {children}
    </InstallAppsContext.Provider>
  );
};
export default InstslledAppProvider;
