import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
const RootLayout = () => {
  return (
    <div>
      {/* <h1>RootLayout works!</h1> */}
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
