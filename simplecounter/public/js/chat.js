var socket =io.connect(document.location["origin"]);
var output =document.getElementById('output'),
    btn=document.getElementById('send'),
    btn2=document.getElementById('reset'),
    btn3=document.getElementById('decrement');

//event listener
btn.addEventListener('click',function () {
    socket.emit('count',{});
});
btn2.addEventListener('click',function(){
  socket.emit('reset',{});
});

btn3.addEventListener('click',function(){
  socket.emit('decrement',{});
});

socket.on('value',function (data) {
	if (data[1] === 'f') {
		document.getElementById('send').disabled = true;
    	output.innerHTML='<p><strong>'+ data[0] +  '</strong></p>';
		btn.innerHTML = `Limit Exceed`;
	}
    else{
    	document.getElementById('send').disabled = false;
    	output.innerHTML='<p><strong>'+ data[0] +  '</strong></p>';
    }

 });
socket.on('newUserValue',function (data) {
   if (data[1] === 'f') {
		document.getElementById('send').disabled = true;
    	output.innerHTML='<p><strong>'+ data[0] +  '</strong></p>';
		btn.innerHTML = `Limit Exceed`;
	}
    else{
    	document.getElementById('send').disabled = false;
    	output.innerHTML='<p><strong>'+ data[0] +  '</strong></p>';
    }
 });

