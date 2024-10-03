# Federation between two Node Servers

This examples shows how you can federate modules between a node remote and a node host.

Key areas to look at:
- `express-server-remote/rspack.config.js` <- how to set up Node Federation for a remote that exposes a module. Pay attention to the `library` option in the `ModuleFederationPlugin` it needs to match the host
- `express-server-host/rspack.config.js` <- how to configure the ModuleFederationPlugin for node. Pay attention to the `target` of `async-node`
- `express-server-host/src/bootstrap.ts` <- note how we simply `import()` from the remote

To run:

In two terminals:

1. `npx nx start express-server-remote`
2. `npx nx serve express-server-shell`
3. Send a GET request to `localhost:3000/users`
