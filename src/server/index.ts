import express from 'express';
import next from 'next';

import { PORT, __PROD__ } from "./constants";

const nextApp = next({
  dev: !__PROD__,
  quiet: __PROD__
});
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.get('*', (req, res) => handle(req, res));

  app.listen(PORT, () => {
    console.log(`ready at http://localhost:${PORT}`);
  });
});
