const express = require("express");

const server = express();

const usersRouter = require("./users/users-router");
const middleWare = require("./middleware/middleware");

// ekspres'in varsayılan olarak istek gövdelerinde JSON'u ayrıştıramayacağını unutmayın

server.use(express.json());
server.use(middleWare.logger);

// global ara yazılımlar ve kullanıcı routelarının buraya bağlanması gerekir

server.get("/", (req, res) => {
  res.send(`<h2>Biraz ara yazılım yazalım!</h2>`);
});
server.use("/api/users", usersRouter);
module.exports = server;
