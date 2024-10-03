const express = require('express');

export function main() {
  const app = express();

  app.get('/', (req: any, res: any) => {
    res.json('hello world')
  })
  app.get('/users', async (req: any, res: any) => {
    // @ts-ignore
    const usersRemote = await (import('express-server-remote/Module').then((m: any) => m.handleUsers));
    usersRemote(req, res);
  })

  app.listen(3000, () => {
    console.log(`Node Server listening on port 3000`);
  });
}
