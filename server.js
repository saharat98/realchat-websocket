const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
var cors = require('cors')
const io = new Server(server, {cors:'localhost:3000'});

app.use(cors());
//Add this before the app.get() block
io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
      console.log('🔥: user disconnected');
    });
    socket.on('chat-message', (data) => {
      console.log(data)
      io.emit('messageResponse', data);
    });
});

// app.get('/', (req, res) => {
//   res.send('kkkkkkkkkkk');
// });


server.listen(4000, () => {
  console.log('listening on *:4000');
});