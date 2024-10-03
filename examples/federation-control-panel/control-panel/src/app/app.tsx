// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import {useEffect, useState} from "react";

export function App() {
  const [currentRemoteVersion, setCurrentRemoteVersion] = useState('http://localhost:4201');

  const fetchManifest = async () => {
    const res = await fetch("http://localhost:3000/manifest");
    const {data} = await res.json();
    console.log(data);
    setCurrentRemoteVersion(data.control_panel_remote);
  }
  useEffect(() => {
    fetchManifest()
  }, [])

  const rollback = async () => {

    await fetch('http://localhost:3000/rollback');
    await fetchManifest();
  }

  return (
    <div>
      Current Remote Version: {currentRemoteVersion}<br />
      <button onClick={rollback}>Rollback</button>
    </div>
  );
}

export default App;
