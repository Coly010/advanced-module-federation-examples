import * as React from 'react';
import {UserContext, User} from "./contexts/user.context";
import {useState} from "react";
import {Login} from "./login/login";
import {Dashboard} from "./dashboard/dashboard";

export function App() {
  const [user, setUser] = useState<User | null>(null)
  return (
    <UserContext.Provider value={{user, setUser}}>
    <React.Suspense fallback={null}>
        <h1 style={{borderBottom: "2px solid black", margin: "1em"}}>B2BDashboard</h1>
      {!user ? <Login /> : <Dashboard />}
    </React.Suspense>
    </UserContext.Provider>
  );
}

export default App;
