// Node modules
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Project files
import { login } from "../scripts/auth";
import { useUser } from "../state/UserState";

export default function Login() {
  // Global state
  const navigate = useNavigate();
  const { setUid, saveUID } = useUser();

  // Local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  // Methods
  async function onSubmit(event) {
    event.preventDefault();

    const result = await login(email, password);

    result.status ? onSucess(result) : onFailure(result);
  }

  function onSucess(result) {
    if (remember) {
      console.log("Login.jsx preparing to save...", result.payload);
      saveUID(result.payload);
    }

    setUid(result.payload);
    navigate("/secret-page");
  }

  function onFailure(result) {
    alert(`Cannot login, ${result.message}`);
  }

  return (
    <div>
      <h1>Login to continue studying</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <label>
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          Remember me
        </label>
        <br />
        <button>Login</button>
      </form>
      <Link to="/recover-password">Forgot password?</Link>
      <br />
      <Link to="/sign-up">Create a new account</Link>
    </div>
  );
}
