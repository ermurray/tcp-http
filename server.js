const net = require('net');
const PORT = 3000;

const server = net.createServer();

server.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});

let id = 0;

const nextId = () => {
  return id++;
}

const listOfSockets = [];

const broadCastMessage = (message, socket, listOfSockets) => {
  listOfSockets.forEach(s => {
    if (s.id !== socket.id) {
     return s.write(`${socket.id}: ${message}\n`);
    }
    //s.id !== socket.id ? s.write(`${socket.id}: ${message}\n`) : null
  })
}

server.on('connection', (socket) => {
  socket.setEncoding('utf-8');
  socket.id = nextId();
  listOfSockets.push(socket);

  console.log(`${socket.id} is connected to the server`);

  socket.write(`You have connected to server on port: ${PORT}`);

  socket.on('data', (data) => {
    console.log(`${socket.id}: ${data}`);
    broadCastMessage(data, socket, listOfSockets)
  });
});

