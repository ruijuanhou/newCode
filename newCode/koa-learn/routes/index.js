const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    global.console.log('index2')
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })

})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/testAsync', async (ctx)=>{
    global.console.log('start',new Date().getTime())
    const a = await new Promise((resolve,reject)=>{
        setTimeout(function(){
            global.console.log('async a',new Date().getTime());
            resolve('ab')
        },1000)
    })
    // awiat 返回一个promise对象
    const b = await 12;
    const c = await Promise.resolve('ccc')
    ctx.body = {
        a,
        b,
        c
    }
})
module.exports = router
