// Project files
import { useUser } from "../state/UserState";

export default function SecretPage() {
  // Global state
  const { setUid, saveUID } = useUser();

  // Method
  function onLogout() {
    saveUID("");
    setUid("");
  }

  return (
    <div>
      <h1>Secret page</h1>
      <p>This is secret but not secure</p>
      <button onClick={() => onLogout()}>Logout</button>
    </div>
  );
}
