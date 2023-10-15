const { createProxyMiddleware } = require('http-proxy-middleware');
const BASE_URL = 'https://8296084146.for-seoul.synctreengine.com/'

module.exports = function (app) {
    app.use('/api', (req, res, next) => {
        createProxyMiddleware({
            target: BASE_URL,
            changeOrigin: true,
            pathRewrite: {
                '^/api/': '/'
            },
            logLevel: 'error',
            cookieDomainRewrite: {
                '*': 'localhost'
            }
        })(req, res, next)
    })
};