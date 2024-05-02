const dotenv = require("dotenv").config();
const http = require("http");
const app = require("../src/app");

(async () => {
  http.createServer(app).listen(process.env.APP_PORT, () => {
    const url = `http://localhost:${process.env.APP_PORT}`;
    console.log(`server listening on ${url}`);
  });
})();
