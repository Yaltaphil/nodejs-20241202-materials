import http from "node:http";
import handler from "./handler.js";
// const http = require('node:http');

const server = new http.Server();

server.on("request", handler);

server.listen(3000);
