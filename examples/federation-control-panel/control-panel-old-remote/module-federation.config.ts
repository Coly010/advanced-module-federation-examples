import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
  name: 'control-panel-old-remote',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
