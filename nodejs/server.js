const http=require("http")


http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.write("hello evryone");
    console.log(req.url);
    res.end();
}).listen(5000,()=>console.log("server is running"))