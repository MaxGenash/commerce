const { https } = require('firebase-functions');
const { default: next } = require('next');

const isDev = process.env.NODE_ENV !== 'production';

const server = next({
  dev: isDev,
});

const nextjsHandle = server.getRequestHandler();
exports.renderNext = https.onRequest((req, res) => {
  return server.prepare().then(() => nextjsHandle(req, res));
});
