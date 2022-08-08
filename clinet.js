const net = require('net');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: 50541,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // display incoming data
  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: ATY');
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 50);
  });

  return conn;
};

module.exports = { connect };