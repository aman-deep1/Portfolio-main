const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    res.writeHead(200,{'context-type':'text/html'});
    if(req.url ==='/home' || req.url==='/'){
        let data=fs.readFileSync('static/index.html');
        res.write(data);
    }
    else{
        let data=fs.readFileSync('static/error.html');
        res.write(data);
    }
    res.end();
}).listen(process.env.PORT, () => {console.log("Server started at port 8080")})