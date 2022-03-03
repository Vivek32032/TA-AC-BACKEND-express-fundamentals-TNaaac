var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

app.use(express.json())
app.use(logger('dev'));
app.use(express.urlencoded({extended :false}))
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());

app.use((req, res, next ) => {
    console.log(req.cookies);
    next();
});

app.use( "/about", (req, res, next ) => {
    res.cookie( 'username', "Vivekkr." );
    next();
} );

app.get( '/', ( req, res ) => {
    res.sendFile(__dirname+"/index.html");
});



app.listen(4545,()=>{
    console.log('server listening on port 4545')
})