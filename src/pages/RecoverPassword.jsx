// Node modules
import { Link } from "react-router-dom";

export default function RecoverPassword() {
  return (
    <div>
      <h1>Sometimes we forgot stuff</h1>
      <form>
        <input type="email" />
        <button>Recover account</button>
      </form>
      <Link to="/login">Go back to login</Link>
    </div>
  );
}
