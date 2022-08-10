const net = require('net');
const { IP, PORT, NAME } = require('./constatns');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // display incoming data
  conn.on('data', (data) => {
    console.log(data);
  });

  // connect to the server
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write(`Name: ${NAME}`);
  });

  return conn;
};

module.exports = { connect };
