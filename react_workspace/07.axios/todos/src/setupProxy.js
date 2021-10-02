const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/todo/',
    createProxyMiddleware({
      target: 'http://127.0.0.1:8000', // 꼭 5000번 아니여도 됨 
      changeOrigin: true,
    })
  );
 app.listen(3000);
  // app.use(
  //   '/api/book/',
  //   createProxyMiddleware({
  //     target: 'http://localhost:5000', // 꼭 5000번 아니여도 됨 
  //     changeOrigin: true,
  //   })
  // );



};