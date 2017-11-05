var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http,{path: '/notification'}).listen(http);
var port = process.env.PORT || 3700;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


http.listen(port, function () {
    console.log('listening on *:' + port);
});


io.on('connection', function (socket) {
    console.log("asgadsg");
    socket.on('onmessage', function (msg) {
        io.emit('onmessage', msg);
    });
});