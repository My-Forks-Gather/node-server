/**
 * Ajax接口路由
 * Created by Eragon on 2017-08-08
 */

const Router = require('koa-router');
const ENUM = require('../common/ENUM');
const userInfoContr = require('../controllers/userInfoController');

const apiRouter = new Router({
    prefix: '/ajax',
});

apiRouter.get('/list', function () {
    const result = {
        code: ENUM.RET_SUCCESS.code,
        msg: ENUM.RET_SUCCESS.msg,
        data: [{
            id: '001',
            name: 'option1',
        }, {
            id: '002',
            name: 'option2',
        }, {
            id: '003',
            name: 'option3',
        }],
    };

    this.body = result;
});

apiRouter.get('/userInfo', function* () {
    let result = null;

    result = yield userInfoContr.getUserinfo(this.request.ip);

    this.body = result;
});

module.exports = apiRouter;