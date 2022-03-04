const { urlencoded } = require('express');
var express =  require('express');

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(__dirname + '/public'))

app.use("/admin",(req,res,next)=>{
    next('Unauthorized to access')
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname + 'index.html')
})

app.get('/about',(req,res)=>{
    res.sendFile(__dirname +'index.html' )
})

app.use((req,res,next)=>{
    res.send('Page not found')
})

app.use((err,req,res,next)=>{
    res.status(500).send(err);
})


app.listen(3000,()=>{
    console.log('server is listening on port 3k')
})