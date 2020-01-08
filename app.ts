/**
 * @param {BodyParser}
 * @todo [BodyParser解析request的body]
 */
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import controllers from './src/controller';

const app = new Koa();
const router = new Router();

/**
 * @todo [解析请求报文的body]
 */
app.use(bodyParser());

/**
 * @todo [打印日志]
 */
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

app.use(controllers.init());

// router.get('/hello/:name', async (ctx, next) => {
//   var name = ctx.params.name;
//   ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// });

// router.get('/', async (ctx) => {
//   ctx.response.body = '<h1>This is Index Page</h1>';
// });

app.use(router.routes());

app.listen(4000, () => {
  console.log('App running in localhost 4000');
});