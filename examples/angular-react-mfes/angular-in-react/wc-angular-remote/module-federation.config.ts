import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'wc-angular-remote',
  exposes: {
    './Module':
      'examples/angular-react-mfes/angular-in-react/wc-angular-remote/src/app/remote-entry/remote-entry.ts',
  },
};

export default config;
