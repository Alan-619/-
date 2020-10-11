var babel = require("@babel/core");
let babels=require('@babel/parser');
//浏览器模块 
var openchrome = require('child_process');
// 自定义配置文件
let config=require('./config.js')
// code
const code = 'const n = 1';
// 将源代码转换为AST
const ast = babels.parse(code);
// 服务器
var http = require('http');
// 引入html模板
var Html_module=require('./html')
let astre= Html_module.html(ast)
var server=http.createServer(function(req, res){ 
  if(req.url=='/')
  {
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write(astre);
    // 写入完成后，需要停止不要一致相应
    res.end()
  }

})
server.listen(1234);
if(config.chrome)
{
  console.log('已自动打开浏览器,参考config文件')
  openchrome.exec('start http://127.0.0.1:1234')
  config.chage('false')
}
else
{
  console.log("根据config文件，不打开浏览器")
}