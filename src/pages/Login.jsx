// Node modules
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Project files
import { login } from "../scripts/auth";

export default function Login() {
  // Global state
  const navigate = useNavigate();

  // Local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Methods
  async function onSubmit(event) {
    event.preventDefault();

    const result = await login(email, password);

    result.status ? onSucess(result) : onFailure(result);
  }

  function onSucess(result) {
    // Refactor: note, we need to store the uid
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
        <button>Login</button>
      </form>
      <Link to="/recover-password">Forgot password?</Link>
      <br />
      <Link to="/sign-up">Create a new account</Link>
    </div>
  );
}
