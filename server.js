const net = require('net');
const PORT = 3000;

const server = net.createServer();
server.listen(PORT, () => {
  console.log(`Server is Listening on ${PORT}`);
} );

let id = 0;
const nextId = () => {
  return id++;
}

const listOfSockets = [];

const broadcastMessage = (message, socket, listOfSockets) => {
  for( const s of listOfSockets) {
    if(s.id !== socket.id) {
      s.write(`${socket.id}: ${message}\n`);
    }
  }
}

server.on('connection', (socket) => {
  // console.log('this is the socket', socket);
  socket.id = nextId();
  listOfSockets.push(socket);
  socket.setEncoding('utf8');
  console.log(`${socket.id} is connected to the server`);
  socket.write(`You have connected to server on port: ${PORT}`);

  socket.on('data', (data) => {
    console.log(`${socket.id}: ${data}`)
    broadcastMessage(data, socket, listOfSockets);
  })
})
