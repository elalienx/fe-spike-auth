// Node modules
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div>
      <h1>Welcome to the boot camp</h1>
      <form>
        {/* Note: Later we will add more fields here */}
        <input type="email" />
        <input type="password" />
        <button>Create account</button>
      </form>
      <Link to="/login">Login instead</Link>
    </div>
  );
}
