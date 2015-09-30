import Express from 'express';
import path from 'path';

var app = Express();
var server;

const DIST_PATH = path.resolve(__dirname, '../dist');

app.use(Express.static(DIST_PATH));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});
