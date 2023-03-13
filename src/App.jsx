// Node modules
import { BrowserRouter } from "react-router-dom";

// Project files
import LoggedRoutes from "./routes/LoggedRoutes";
import UnloggedRoutes from "./routes/UnloggedRoutes";
import { useUser } from "./state/UserState";

// Add a Context API to store the UID and then verify on BrowserRouter level for maximum secuity.
export default function App() {
  const { uid } = useUser();

  return (
    <div className="App">
      <BrowserRouter>
        {uid ? <LoggedRoutes /> : <UnloggedRoutes />}
      </BrowserRouter>
    </div>
  );
}
