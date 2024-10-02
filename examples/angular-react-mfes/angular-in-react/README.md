# Angular MFE in React Host Application

This example shows how you can use an Angular MFE (remote) in a React Host application.

The key files to look at are:

- `wc-angular-remote/src/app/remote-entry/remote-entry.ts` <- Creates the Web Component which mounts the Angular Component
- `wc-angular-remote/module-federation.config.ts` <- Exposes the Angular app
- `wc-react-shell/module-federation.config.ts` <- Adds the Angular app as the remote. 
- `wc-react-shell/src/app/app.tsx` <- Uses `import` to load the Web Component via Module Federation and uses it in the render `<angular-mfe></angular-mfe>`

To run the example: 
`npx nx serve wc-react-shell`

Some other things to note here are:
 - Angular is using Webpack to build the remote
 - React is using Rspack to build the host
