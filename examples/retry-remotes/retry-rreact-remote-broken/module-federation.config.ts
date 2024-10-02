import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
  name: 'retry-rreact-remote-broken',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
