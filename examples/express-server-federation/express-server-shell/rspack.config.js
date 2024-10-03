const {ModuleFederationPlugin} = require("@module-federation/enhanced/rspack");


module.exports = {
  mode: 'development',
  target: 'async-node',
  entry: './src/index.ts',
  output: {
    library: {type:'commonjs-module'},
    publicPath: '/',
    path: __dirname + '/../../../dist/examples/express-server-federation/express-server-shell',
  },
  resolve: {
    extensions: ['.js', '.ts'],
    tsConfig: __dirname + '/tsconfig.json'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'builtin:swc-loader',
        options: {
          jsc: {
            parser: {
              syntax: 'typescript',
            },
          },
        },
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [new ModuleFederationPlugin({
    isServer: true,
    name: 'express-server-shell',
    runtimePlugins: [
      require.resolve('@module-federation/node/runtimePlugin')
    ],
  })]
}
