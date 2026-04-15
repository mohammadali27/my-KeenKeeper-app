import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center">
      <p className=" ">Not found this page</p>
      <Link className="btn " href="/">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
