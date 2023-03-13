// Node modules
import { Routes, Route } from "react-router-dom";

// Project files
import SecretPage from "../pages/SecretPage";

export default function LoggedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SecretPage />} />
      <Route path="/secret-page" element={<SecretPage />} />
    </Routes>
  );
}
