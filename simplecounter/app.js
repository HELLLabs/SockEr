var express=require('express');
var socket=require('socket.io');
var app=express();

var server=app.listen(8000,function () {
  console.log("lisiting to port no 5000");
});
app.use(express.static('public'));
app.get('/',function (req,res) {
  res.sendfile('index.html');
});
app.get('/view',function (req,res) {
  res.sendfile('view.html');
});

var io = socket(server);
var room=0;

var a=0;
io.on('connection',function (socket) {
  room+=1;
  console.log('connection made', room);
  socket.on('disconnect',function(){
    room--;
    console.log('connection made',room);
  });

  socket.on('count',function (val) {
    a=val;

    io.sockets.emit('count',a);

  });
  socket.on('reset',function (reset) {
    io.sockets.emit('count',reset);

  });
  socket.on('decrement',function (val) {
    io.sockets.emit('count',val);

  });

});
