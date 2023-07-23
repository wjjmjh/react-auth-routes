import Login from "@/components/Login";
import Logout from "@/components/Logout";
import Protected from "@/components/Protected";
import Unprotected from "@/components/Unprotected";
import AuthProvider, {
  AuthIsNotSignedIn,
  AuthIsSignedIn,
} from "@/contexts/AuthContext";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

export default function App() {
  return (
    <AuthProvider>
      <AuthIsSignedIn>
        <Router>
          <Routes>
            <Route path={"/"} element={<Protected />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/logout"} element={<Logout />} />
            <Route path={"/protected"} element={<Protected />} />
          </Routes>
        </Router>
      </AuthIsSignedIn>
      <AuthIsNotSignedIn>
        <Router>
          <Routes>
            <Route path={"/"} element={<Login />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/unprotected"} element={<Unprotected />} />
            <Route path="/*" element={<Navigate replace to={"/login"} />} />
          </Routes>
        </Router>
      </AuthIsNotSignedIn>
    </AuthProvider>
  );
}
