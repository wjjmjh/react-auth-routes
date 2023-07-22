import Login from "@/components/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </Router>
  );
}
