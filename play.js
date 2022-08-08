const { connect } = require('./clinet');
const { setupInput } = require('./input');

console.log("Connecting ...");
connect();
setupInput();
