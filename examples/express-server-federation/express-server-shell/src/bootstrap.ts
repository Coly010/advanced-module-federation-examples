import {init, loadRemote} from "@module-federation/runtime";
import nodeRuntimePlugin from '@module-federation/node/runtimePlugin';
const express = require('express');

export function main() {
  init({
    name: 'express-server-shell',
    remotes: [
      {
        name: 'express-server-remote',
        entry: 'http://localhost:4201/remoteEntry.js',
        entryGlobalName: 'express-server-remote',
        type: 'script'
      }
    ],
    plugins: [nodeRuntimePlugin()]
  })
  const app = express();

  app.get('/', (req: any, res: any) => {
    res.json('hello world')
  })
  app.get('/users', async (req: any, res: any) => {
    // @ts-ignore
    const usersRemote = await (loadRemote('express-server-remote/Module').then((m: any) => m.handleUsers));
    usersRemote(req, res);
  })

  app.listen(3000, () => {
    console.log(`Node Server listening on port 3000`);
  });
}
