const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "https://8296084146.for-seoul.synctreengine.com/",
            changeOrigin: true,
        })
    );
};