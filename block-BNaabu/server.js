const { urlencoded } = require('express');
var express =  require('express');

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(__dirname + '/public'))

app.get('/admin',(req,res,next)=>{
    res.statusCode = 404;
    next('page not found')
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname + 'index.html')
})

app.get('/about',(req,res)=>{
    res.sendFile(__dirname +'index.html' )
})



app.get((err,req,res,next)=>{
    res.send(err);
})


app.listen(3000,()=>{
    console.log('server is listening on port 3k')
})