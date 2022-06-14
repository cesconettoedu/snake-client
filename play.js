const connect = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");
//connect();
const conn = connect();
setupInput(conn); // receive the output from connect function in client.js and pass to setupinput at input.js

