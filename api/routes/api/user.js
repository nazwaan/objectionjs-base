const Router = require('koa-router')
const UserController = require('../../controllers/user-controller')
const userController = new UserController()

const routes = new Router({ prefix: "/users" });

routes.get('/:id', async function(ctx, next){ await userController.find(ctx, next) });

module.exports = routes;