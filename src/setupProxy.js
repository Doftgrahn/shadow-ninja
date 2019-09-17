const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  // proxy api calls
  app.use(proxy('/api', {
    target: 'http://localhost:1337/',
    changeOrigin: true,
  }));

  app.use(proxy('/login', {
    target: 'http://localhost:1337/',
    changeOrigin: true,
  }));

  app.use(proxy('/register', {
    target: 'http://localhost:1337/',
    changeOrigin: true,
  }));

  // proxy websocket
  app.use(proxy('/socket.io', {
    target: 'http://localhost:1337/',
    changeOrigin: true,
    ws: true,
  }));
};
