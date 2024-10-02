import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';
import { loadRemote } from '@module-federation/enhanced/runtime';

const OfflineRemote = React.lazy(
  () => loadRemote('offline-remote/Module') as any
);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/offlineRemote">Offline Remote</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="retry-react-shell" />} />

        <Route
          path="/offlineRemote"
          element={<OfflineRemote />}
        />
      </Routes>
    </React.Suspense>
  );
}

export default App;
