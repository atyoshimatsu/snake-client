const { KEY_MAP } = require('./constatns');
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key in KEY_MAP) {
    connection.write(KEY_MAP[key]);
  }
};

module.exports = { setupInput };
