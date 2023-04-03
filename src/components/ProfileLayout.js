import React from "react";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <>
      <h2>Profile Layout</h2>
      <Outlet />
    </>
  );
};

export default ProfileLayout;
