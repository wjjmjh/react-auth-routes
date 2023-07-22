import Login from "@/components/Login";
import Logout from "@/components/Logout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/logout"} element={<Logout />} />
      </Routes>
    </Router>
  );
}
