//install node js in your pc
//type localhost:2001/req.url

const http=require("http");
const fs=require("fs");
const path=require("path");
const server=http.createServer(function main(request,response){

if(request.url==="/bmw"||request.url==="/BMW"){

fs.readFile(path.join(__dirname,"response","bmw.html"),"utf-8",function callback(err,data){

if(err) throw err;

response.writeHead(200,{"content-type":"text/html"})

response.end(data)
})



}

if(request.url==="/ford"||request.url==="/FORD"||request.url==="/mustang"){

    fs.readFile(path.join(__dirname,"response","ford.html"),"utf-8",function callback(err,data){
    
    if(err) throw err;
    
    response.writeHead(200,{"content-type":"text/html"})
    
    response.end(data)
    })
}

if(request.url==="/rc"||request.url==="/RC"||request.url==="/ktmrc"){

    fs.readFile(path.join(__dirname,"response","rc.html"),"utf-8",function callback(err,data){
    
    if(err) throw err;
    
    response.writeHead(200,{"content-type":"text/html"})
    
    response.end(data)
    })

}

})

const port=process.env.port|2001;

server.listen(port,function(err){

if(err) throw err;

else{
   console.log(`server is running on ${port}`)
}
})
