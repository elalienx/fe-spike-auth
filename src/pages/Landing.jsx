import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>Welcome to our website</h1>
      <p>Login to see the benefits we provide</p>
      <Link to="/login">Get started</Link>
    </div>
  );
}
