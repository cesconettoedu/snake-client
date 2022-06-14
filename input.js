const {message, EXIT, MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY}  = require("./constants");

let connection;

// receive parameter from play.js
const setupInput = (conn) => {
  connection = conn; 
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
   
  if (data === EXIT) { //ctrl -c keyboard
    process.exit(); 
  } else if (data === MOVE_UP_KEY) {
    connection.write("Move: up");
  } else if (data === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  } else if (data === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  } else if (data === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
     
     //send a mensage to others if you press the letter in the game
  } else if (data === 'r') {  
    connection.write(message.r);
  } else if (data === 't') {  
    connection.write(message.t);
  } else if (data === 'y') {  
    connection.write(message.y);
  } else if (data === 'e') {  
    connection.write(message.e);
  };

}


module.exports = setupInput;
