import * as React from 'react';


import { Link } from 'react-router-dom';

import('wc_angular_remote/Module');

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div style={{border: "2px dashed black"}}>
        <h1>This is a React Shell</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
        <angular-mfe></angular-mfe>
      </div>
    </React.Suspense>
  );
}

export default App;
