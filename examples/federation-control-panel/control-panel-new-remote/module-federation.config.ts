import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
  name: 'control-panel-new-remote',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
