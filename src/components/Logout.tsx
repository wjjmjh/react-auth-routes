import { AuthContext } from "@/contexts/AuthContext";
import React, { useContext } from "react";

const onLogout = () => console.log("logout!");

const Logout: React.FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <button
      onClick={async () => {
        localStorage.setItem("username", "");
        authContext.signOut();
        window.location.href = "/login";
      }}
    >
      Logout
    </button>
  );
};

export default Logout;
