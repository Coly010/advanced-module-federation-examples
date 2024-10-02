import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

import {init} from '@module-federation/enhanced/runtime';
import {RetryPlugin} from '@module-federation/retry-plugin';

init({
  name: 'retry-react-shell',
  remotes: [
    {
      name: 'offline-remote',
      entry: 'http://localhost:3000',
    },
  ],
  plugins: [
    // @ts-ignore
    RetryPlugin({
      fetch: {
        retryTimes: 10,
        retryDelay: 500,
        fallback: () => "http://localhost:4201/mf-manifest.json",
      }
    })
  ]
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
