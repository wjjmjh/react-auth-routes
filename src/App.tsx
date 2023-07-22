import Login from "@/components/Login";
import Logout from "@/components/Logout";
import Protected from "@/components/Protected";
import Unprotected from "@/components/Unprotected";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/logout"} element={<Logout />} />
        <Route path={"/protected"} element={<Protected />} />
        <Route path={"/unprotected"} element={<Unprotected />} />
      </Routes>
    </Router>
  );
}
