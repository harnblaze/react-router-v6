import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UsersListLayout from "./components/UsersListLayout";
import ProfileLayout from "./components/ProfileLayout";

import React from "react";
import UsersList from "./components/UsersList";
import Profile from "./components/Profile";
import EditPage from "./components/EditPage";

function App() {
  return (
    <>
      <h1>APp</h1>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/users" element={<UsersListLayout />}>
          <Route path="" element={<UsersList />} />
          <Route path=":userId" element={<ProfileLayout />}>
            <Route path="" element={<Navigate to="profile" />} />
            <Route path="profile" element={<Profile />} />
            <Route path="edit" element={<EditPage />} />
            <Route path="*" element={<Navigate to="profile" />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
