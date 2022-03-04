var express = require("express");
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded( {extended : false}));
app.use(express.static(__dirname + 'public'))
app.use(logger('dev'));
app.use(cookieParser());

app.use((req,res,next)=>{
    res.cookie('username',"xyz");
    next();
})

//routes

app.get('/',(req,res)=>{
    res.send('<h2 style="color:blue">Welcome to express<h2>')
})

app.get('/about',(req,res)=>{
    res.send('My name is qwerty')
})

app.post('/form',(req,res)=>{
    res.json(req.body);
})

app.post('/json',(req,res)=>{
    res.json(req.body);
})
app.get('/users/:username',(req,res)=>{
    var username = req.params.username;
    res.send(`<h2>${username}</h2>`)
});
//error handlers
app.use((req,res,next)=>{
    res.send('Page Not Found');
})

//custom middleware
app.use((err,req,res,next)=>{
    res.send(err);
})

app.listen(3000,()=>{
    console.log('server listening on port 3k');
})

