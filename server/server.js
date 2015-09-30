'use strict'

import Express from 'express';
import path from 'path';

const app = Express();
var server;
const DIST_PATH = path.resolve(__dirname, '../dist');
const DEV_PATH = path.resolve(__dirname, '../');
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'dev') {
  app.use(Express.static(DEV_PATH));
} else {
  app.use(Express.static(DIST_PATH));
}

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

server = app.listen(port, () => {
  console.log('Server is listening at %s', port);
});
