// Node modules
import { Routes, Route } from "react-router-dom";

// Project files
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import RecoverPassword from "../pages/RecoverPassword";
import PageNotFound from "../pages/PageNotFound";

export default function UnloggedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
