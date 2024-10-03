import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
  name: 'b2b-dashboard-enhanced-metrics-card',

  exposes: {
    './MetricsCard': './src/remote-entry.ts',
  },
};

export default config;
