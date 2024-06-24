const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db1.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 8889;

server.listen(PORT, () => {
    console.log(`${PORT}`);
});