# React MFE in Angular Host Application

This example shows how you can use a React MFE (remote) in an Angular Host application.

The key files to look at are:

- `wc-react-remote/src/remote-entry.tsx` <- Creates the Web component which mounts the React App
- `wc-react-remote/module-federation.config.ts` <- Exposes the React app
- `ng-shell/module-federation.config.ts` <- Adds the react as the remote. This isn't strictly necessarily, but it provides nice DX within Nx Workspace 
- `ng-shell/src/app/app.component.ts` <- Uses Module Federation Runtime to register the React Remote at runtime, then uses `loadRemote` to load the federated module (which defines the custom element) 
- `ng-shell/src/app/app.component.html` < - Shows the use of the React MFE

To run the example: 
`npx nx serve wc-ng-shell`

Some other things to note here are:
 - Angular is using Webpack to build the host
 - React is using Rspack to build the remote
