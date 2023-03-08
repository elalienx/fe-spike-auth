// Node modules
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Project files
import { createAccount } from "../scripts/auth";

export default function SignUp() {
  // Global state
  const navigate = useNavigate();

  // Local state
  // Note: Switch to useRef() instead of useState() to avoid the onChange event
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Methods
  async function onSubmit(event) {
    event.preventDefault();

    const result = await createAccount(email, password);

    result.status === true ? onSucess(result) : onFailure(result);
  }

  function onSucess(result) {
    // Refactor note: store the uid in the context api (in the future)
    navigate("/secret-page");
  }

  function onFailure(result) {
    alert(`Cannot create an account, ${result.message}`);
  }

  return (
    <div>
      <h1>Welcome to the boot camp</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        {/* Note: Later we will add more fields here */}
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button>Create account</button>
      </form>
      <hr />
      <Link to="/login">Login instead</Link>
    </div>
  );
}
