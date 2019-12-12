var express=require("express");
const http = require('http'); // 1

var hostname = '202.31.147.186';
var port = 8080;

var app=express();

app.use(express.static("public/"));


app.get('/',function(req,res){

    res.sendFile("index.html");
})


app.listen(port,function(){
    console.log("Server 3000port");
});

// http.createServer((request, response) => { // 2
//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'text/plain');
//   response.end('Hello World');
// }).listen(port,hostname,()=>{
//     console.log('Server running at http://127.0.0.1:3000/');
// }); // 3

