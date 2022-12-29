const { StringDecoder } = require("string_decoder");
const url = require("url");
const routes = require("../routes.js");
const notFoundHandler = require("../handlers/routeHandlers/notFoundHandler");

const handler = {};

handler.handleReqRes = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;
  const method = req.method.toLowerCase();
  const decoder = new StringDecoder("utf-8");
  let realData = "";
  const requestProperties = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headersObject,
  };
  const chosenHandler =
    trimmedPath === "sample" ? routes[trimmedPath] : notFoundHandler;
  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });
  req.on("end", () => {
    realData += decoder.end();

    chosenHandler(requestProperties, (statusCode, payload) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payload = typeof payload === "object" ? payload : {};
      console.log(statusCode, ":::statusCode");
      const payloadString = JSON.stringify(payload);
      res.writeHead(statusCode);
      res.end(payloadString);
    });

    res.end("Hello");
  });
};
module.exports = handler;
