import InstslledAppProvider from "@/context/install.context";
import React from "react";

const Providers = ({ children }) => {
  return <InstslledAppProvider>
    {children}
    </InstslledAppProvider>;
};

export default Providers;
