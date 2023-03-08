// Node modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import Login from "./pages/Login";
import RecoverPassword from "./pages/RecoverPassword";
import SignUp from "./pages/SignUp";
import SecretPage from "./pages/SecretPage";

// Add a Context API to store the UID and then verify on BrowserRouter level for maximum secuity.
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/secret-page" element={<SecretPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
