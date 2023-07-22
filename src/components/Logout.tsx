import React from "react";

const onLogout = () => console.log("logout!");

const Logout: React.FC = () => {
  return <button onClick={onLogout}>Logout</button>;
};

export default Logout;
