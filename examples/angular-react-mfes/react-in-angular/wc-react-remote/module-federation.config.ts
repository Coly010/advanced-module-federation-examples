import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
  name: 'wc-react-remote',

  exposes: {
    './Module': './src/remote-entry.tsx',
  },
};

export default config;
