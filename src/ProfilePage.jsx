import React from "react";
import { useAuth } from "./auth";

const ProfilePage = () => {
  const auth = useAuth();

  return (
    <>
      <p>ProfilePage</p>
      <h1>{`Welcome ${auth.user.username}!`}</h1> 
    </>
  );
};
export { ProfilePage };
