const Router = require('koa-router')

const userRoutes = require('./user')

const routes = new Router({ prefix: "/api" });

routes.use(
  userRoutes.routes(),
);

module.exports = routes;
