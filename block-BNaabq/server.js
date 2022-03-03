var express = require('express');
var logger = require('parser');
var cookieParser = require('cookie-parser');

var app = express();

app.use(logger('dev'));
app.use(cookieParser());


app.use( ( req, res, next ) => {
    res.cookie( 'username', "Vivekkr." );
    next();
} );

app.get( '/about', ( req, res ) => {
    res.send("morgan and cookie parser");
} )


app.listen(4545,()=>{
    console.log('server listening on port 4545')
})