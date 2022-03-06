var express =  require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser')
var app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({extended:'false'}));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(cookieParser());

app.use((req,res,next)=>{
    res.cookie('username',"abc");
    next();
})

//routes
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.get('/users',(req,res)=>{
    res.send('MY name is Vivek kr.')
})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about.html')
})
app.get('/blog',(req,res)=>{
    res.sendFile(__dirname+'/blog.html')
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/contact.html')
})
app.get('/cases',(req,res)=>{
    res.sendFile(__dirname+'/cases.html')
})
app.get('/services',(req,res)=>{
    res.sendFile(__dirname+'/services.html');
})

//error handlers
app.use((req,res,next)=>{
    res.send('Page Not Found');
})

app.use((err,req,res,next)=>{
    res.send(err);
})

app.listen(4000,()=>{
    console.log('sever is listening on port 4k');
});



