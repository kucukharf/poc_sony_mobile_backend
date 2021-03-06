const Router = require('koa-router');
const ctrl = require('../controllers').programs;

const router = new Router();
const BASE_URL = '/programs';

router.get(BASE_URL, ctrl.get);

router.get(`${BASE_URL}/:id`, ctrl.getOne);

module.exports = router.routes();
