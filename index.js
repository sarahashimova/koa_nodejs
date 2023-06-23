const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.status=200;
  ctx.accepts = "html";
  switch(ctx.url) {
    case "/" :
         ctx.body = "<h1>This is my home page</h1>";
         break;
    case "/about":
        ctx.body = "<h1>ABOUT SAYFASINA HOŞGELDİNİZ</h1>"
        break;
    case "/contact":
        ctx.body = "<h1>CONTACT SAYFASINA HOŞGELDİNİZ</h1>"
        break;
    default:
        ctx.status = 404;
        ctx.body = "<h1>404 SAYFA BULUNAMADI</h1>"
        break;
  }

});

app.listen(3001);