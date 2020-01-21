var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 3000);
//var server = app.listen(3000);
var io = require('socket.io')(server);

io.on('connection',
	function (socket) {
		socket.on("send",function(data){
			console.log(data);
			socket.broadcast.emit("receive",data);
		});
	}
);
