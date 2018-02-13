var socket =io.connect(document.location["origin"]);
var output =document.getElementById('output'),
    btn=document.getElementById('send'),
    btn2=document.getElementById('reset'),
    btn3=document.getElementById('decrement');

//event listener
btn.addEventListener('click',function () {
    console.log('ADD');
    socket.emit('count',{});
});
btn2.addEventListener('click',function(){
  socket.emit('reset',{});
  console.log('RESET');
});

btn3.addEventListener('click',function(){
  console.log('SUBS.');
  socket.emit('decrement',{});
});

socket.on('value',function (data) {
   output.innerHTML='<p><strong>'+ data[0] +  '</strong></p>';

 });
socket.on('newUserValue',function (data) {
   output.innerHTML='<p><strong>'+ data[0] +  '</strong></p>';
 });

