// Node modules
import { createContext, useContext, useState } from "react";

// Properties
const Context = createContext();

export function UserProvider({ children }) {
  // Local state
  const [uid, setUid] = useState("");

  // Properties
  const value = { uid, setUid };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useUser() {
  // Properties
  const context = useContext(Context);

  // Safeguard
  if (!context) throw new Error("useUser() must be used within <UserProvider>");

  return context;
}
