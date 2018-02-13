var socketIO = require('socket.io');

module.exports = (server)=>{
	var io = socketIO(server);
	var limit = 100,
	    registred = 0;
	io.on('connection', function(socket){
		socket.emit('newUserValue',[registred,limit-1 > registred ? 'r':'f',limit]);
		socket.on('count',function(data){
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
			registred = 0
			io.sockets.emit('value',[registred,'r']);
		});
		socket.on('decrement', function(data) {
			if (registred > 0) {
				registred -= 1;
				io.sockets.emit('value',[registred,'r']);
			}
		});
		socket.on('setLimit', function(data){
			limit = data;
			registred = 0;
			io.sockets.emit('newLimit',[limit, 'Limit is saved']);
			io.sockets.emit('value',[registred,'r']);
		});
	}); 
}