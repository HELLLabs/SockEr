var express=require('express');
var socketIO=require('./config/socket.io');
var app=express();

var server=app.listen(8000,function () {
  console.log("lisiting to port no 5000");
});

socketIO(server);

app.use(express.static('public'));
app.get('/',function (req,res) {
  res.sendfile('index.html');
});


app.get('/view',function (req,res) {
  res.sendfile('view.html');
});