import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const UsersListLayout = () => {
  return (
    <>
      <h2>Users list</h2>
      <ul>
        <li>
          <NavLink to="/">Back to Home</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default UsersListLayout;
