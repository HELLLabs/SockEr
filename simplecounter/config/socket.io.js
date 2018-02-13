var socketIO = require('socket.io');

module.exports = (server)=>{
	var io = socketIO(server);
	var limit = 100,
	    registred = 0;
	console.log('config socket.....');
	io.on('connection', function(socket){
		socket.emit('newUserValue',[registred,limit-1 > registred ? 'r':'f',limit]);
		console.log('connection');
		socket.on('count',function(data){
			console.log('add');
			if (registred < limit - 1) {
				registred += 1;
				io.sockets.emit('value',[registred,'r']);
			}
			else if(registred < limit){
				registred += 1;
				io.sockets.emit('value',[registred,'f']);
			}
			else{
				io.sockets.emit('value',[registred,'f']);
			}
		});
		socket.on('reset',function(data) {
			console.log('reset');
			registred = 0
			io.sockets.emit('value',[registred,'r']);
		});
		socket.on('decrement', function(data) {
			console.log('decrement');
			if (registred > 0) {
				registred -= 1;
				io.sockets.emit('value',[registred,'r']);
			}
		});
		socket.on('setLimit', function(data){
			limit = data;
			registred = 0;
			io.sockets.emit('newLimit',limit);
			io.sockets.emit('value',[registred,'r']);
		});
	}); 
}