const proxy = require("http-proxy-middleware");

const URI = process.env.REVERSE_PROXY_URI || "http://localhost:1337";

module.exports = app => {
  // proxy api calls
  app.use(
    proxy("/api/*", {
      target: URI,
      changeOrigin: true
    })
  );

  app.use(
    proxy("/login", {
      target: URI,
      changeOrigin: true
    })
  );

  app.use(
    proxy("/register", {
      target: URI,
      changeOrigin: true
    })
  );

  // proxy websocket

  app.use(
    proxy("/socket.io", {
      target: URI,
      changeOrigin: true,
      ws: true
    })
  );

  /*
  app.use(proxy('/socket.io/twitter', {
    target: URI,
    changeOrigin: true,
    ws: true,
  }));
  */
};

/*


};
*/
