const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
})

const client = net.createConnection({
  host: 'localhost',
  port: 3000
});

client.setEncoding('utf-8');

client.on('data', (data) => {
  console.log(data);
});

rl.on('line', (input) => {
  client.write(`${input}\n`)
});
