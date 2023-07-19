const Router = require('koa-router');
const  UserController= require('../controller/user')
const router = new Router()

router.prefix('/users')

router.post('/register', UserController.handleRegister)
router.post('/login', UserController.handleLogin)


module.exports = router