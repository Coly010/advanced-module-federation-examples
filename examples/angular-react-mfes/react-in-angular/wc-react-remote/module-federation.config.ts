import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'wc-react-remote',
  exposes: {
    './Routes':
      'examples/angular-react-mfes/react-in-angular/wc-react-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
