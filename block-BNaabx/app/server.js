var express =require('express');
var app = express();


app.use((req,res,next)=>{
    const today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(req.method,req.url,time);
    next();

})

app.use((req,res,next)=>{
    req.body=JSON.parse(req.body);
    next();
})

app.use((path,req,res,next)=>{

    req.url=req.url+path;
    next();
})


app.listen(4444,()=>{
    console.log('server is listening on port 4444')
})