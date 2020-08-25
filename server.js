const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;
const rewriteRoutes = require("./routes.json")

server.use(jsonServer.rewriter(rewriteRoutes))
server.use(middlewares);
server.use(router);

server.listen(port, ()=>console.log("sever is runing on port:", port));