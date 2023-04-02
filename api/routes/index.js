const Router = require('koa-router')
const apiRoutes = require('./api')

const routes = new Router();

routes.use(
	apiRoutes.routes(),
);

module.exports = routes;