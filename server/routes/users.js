const router = require('koa-router')()
const mysql = require('../config/db')

router.prefix('/users')

router.get('/', async function (ctx, next) {
  // ctx.body = 'this is a users response!'
  const data = await mysql.select().from('Customers')
  console.log('data===>', data.length)
  const result = {
    'msg': '请求成功',
    'data': data || '{}'
  }
  ctx.status = 200

  ctx.body = JSON.stringify(result)
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
