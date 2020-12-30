const http = require('http');

// const next = require("next")
// const app = next({ dev: false })
// const handle = app.getRequestHandler();

const server = new http.Server((req, res) => {
  if (req.url === '') {
    req.url = '/'
  }
  // return app.prepare()
  //   .then(() => handle(req, res))
  //   .catch(ex => {
  //     console.error(ex.stack)
  //     process.exit(1)
  //   });
  let handler;
  switch (req.url) {
    case '/':
      handler = require('./.next/serverless/pages/index.js');
      break
  }
  handler.render(req, res);
});

server.listen(3000, () => console.log('Listening on http://localhost:3000'));
