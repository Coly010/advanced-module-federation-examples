import React from "react";
import {loadRemote} from '@module-federation/enhanced/runtime';

const ControlPanelRemote = React.lazy(
  () => loadRemote('control-panel-remote/Module') as any
);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <h1>Control Panel Shell</h1>
      <hr />
      <ControlPanelRemote />
    </React.Suspense>
  );
}

export default App;
