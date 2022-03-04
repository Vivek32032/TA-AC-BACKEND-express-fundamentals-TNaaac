var express = require("express");

var app = express();

app.use(express.json());
app.use(express.urlencoded( {extended : false}));
app.use(express.static(__dirname + 'public'))

app.get('/',(req,res)=>{
    res.send('<h2 style="color:blue">Welcome to express<h2>')
})

app.get('/about',(req,res)=>{
    res.send('My name is qwerty')
})

app.listen(3000,()=>{
    console.log('server listening on port 3k');
})

