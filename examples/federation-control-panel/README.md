# Managing Rollbacks of Remotes with a separate Control Panel

This example shows a Module Federation setup containing a Host application and a Remote with a control panel application that can be used to rollback the remote to a different version.

Key areas:
- `control-panel-shell/src/bootstrap.tsx` <- Shows how we initialise the Module Federation setup to point the entry file to a value received from an API request
- `control-panel-shell/src/app/app.tsx` <- Shows how the remote is loaded with `loadRemote`
- `fake-db/assets/manifest.json` <- Contains the live manifest json of active remotes
- `fake-db/src/index.ts` <- Simple Express App to update the manifest json to point to the correct remote

To run:

- `npx nx serve-all control-panel-shell`

1. In one browser window, open `localhost:4200` <- This is the Shell w/ Remote
2. In second browser window, open `localhost:8080` <- This is the control panel
3. Click `Rollback` on the Control Panel app
4. Refresh the Shell app
5. Note the remote changed
