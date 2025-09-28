// Express
const http =require("http");

const server =http.createServer((req,res)=>{
    if(req.url=="/home" && req.method =="GET"){
        res.end("This is the home page")
    }else if(req.url== "/contact" && req.method == "GET"){
        res.end("This is the contact page")
    }
});

server.listen(3000,()=>{
    console.log("server started")
})