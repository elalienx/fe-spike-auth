// Node modules
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>Login to continue studying</h1>
      <form>
        <input type="email" />
        <input type="password" />
        <button>Login</button>
      </form>
      <Link to="/recover-password">Forgot password?</Link>
      <br />
      <Link to="/sign-up">Create a new account</Link>
    </div>
  );
}
