import React, { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { getTokenDuration } from "../util/auth";
const RootLayout = () => {
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) return;
    if (token === "EXPIRED") {
      alert("Session expired! Please login again.");
      submit(null, { action: "/logout", method: "POST" });
      return;
    }
    const duration = getTokenDuration();
    console.log("TOKEN EXPIRATION DURATION : ", duration);
    setTimeout(() => {
      alert("Session expired! Please login again.");
      submit(null, { action: "/logout", method: "POST" });
    }, duration);
  }, [token, submit]);
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
