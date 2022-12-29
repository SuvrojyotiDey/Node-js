const http = require("http");
const handler = require("./helpers/handleReqRes");
const environments = require("./helpers/environments");
const app = {};
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environments.port, () => {
    console.log(`listening to port ${environments.port}`);
  });
};
app.handleReqRes = handler.handleReqRes;
app.createServer();
