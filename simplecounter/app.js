var express=require('express');
var socketIO=require('./config/socket.io');
var path = require('path');
var app=express();

var server=app.listen(8000,function () {
  console.log("Server is listening at port 8000");
});

socketIO(server);

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/',function (req,res) {
  res.render('index')
});


app.get('/view',function (req,res) {
  res.render('view');
});

app.get('/setting',function (req,res) {
  res.render('edit');
});