#!/usr/bin/env node

const koa = require('koa');
const static = require('koa-static');
const KoaRouter = require("koa-logger");
const Moment = require("moment");
const path = require('path');
const args = require('args');
const app = new koa();


args
  .option('port', 'The port on which the app will be running', 3000)
  .option('root', 'http server root dir', '.')

const flags = args.parse(process.argv)

const root = path.join(process.cwd(), flags.root)


app.use(KoaRouter((str) => {
  //只显示响应日志，过滤掉请求日志
  if (str.includes('-->')) {
    console.log(Moment().format('YYYY-MM-DD HH:mm:ss') + str);
  }
}))

// 获取静态资源
app.use(static(root));

let _port = flags.port === 80 ? '' : `:${flags.port}`;

app.listen(flags.port, () => {
  console.log(`listening ${flags.port}, home: http://localhost${_port} root:${root} ... `);
})
