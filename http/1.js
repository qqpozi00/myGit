/**
 * Created by malibo on 2016/3/4.
 */
var http = require("http");
/*
* */
function server(req,res){
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    res.statusCode = 404;
    res.setHeader("Content-Type","text/html;charset=utf-8");
    res.setHeader("name","mlb");
    res.write(new Date().toString());
    res.end();
}
var server = http.creatServer(server);
server.listen(7798,"localhost");