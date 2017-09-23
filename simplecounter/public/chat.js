var socket =io.connect(document.location["origin"]);
var output =document.getElementById('output'),
    btn=document.getElementById('send'),
    btn2=document.getElementById('reset'),
    btn3=document.getElementById('decrement');

var val=0;
//event listener
btn.addEventListener('click',function () {
    val+=1;
    socket.emit('count',val);
});
btn2.addEventListener('click',function(){
  var reset=0;
  socket.emit('reset',reset);
});

btn3.addEventListener('click',function(){
  val-=1;
  socket.emit('decrement',val);
});



 socket.on('count',function (a) {
   val = a;
   output.innerHTML='<p><strong>'+ val +  '</strong></p>';

 });
 socket.on('reset',function (reset) {

   output.innerHTML='<p><strong>'+ reset +  '</strong></p>';

 });
 socket.on('decrement',function (a) {
   val = a;
   output.innerHTML='<p><strong>'+ val +  '</strong></p>';

 });
