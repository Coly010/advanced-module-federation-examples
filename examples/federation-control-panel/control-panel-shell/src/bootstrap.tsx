import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {init} from '@module-federation/enhanced/runtime';

async function setUpModuleFederation() {
    const res = await fetch("http://localhost:3000/manifest");
    const {data} = await res.json();
    const controlPanelRemoteEntry = data.control_panel_remote;
    init({
      name: 'control-panel-shell',
      remotes: [{
        name: 'control-panel-remote',
        entry: controlPanelRemoteEntry,
      }]
    })
}

import App from './app/app';

setUpModuleFederation().then(() => {

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </StrictMode>
  );
})
