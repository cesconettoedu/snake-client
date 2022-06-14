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
  if (data === '\u0003') { //ctrl -c keyboard
    process.exit(); 
  } else if (data === 'w') {
    connection.write("Move: up");
  } else if (data === 'a') {
    connection.write("Move: left");
  } else if (data === 's') {
    connection.write("Move: down");
  } else if (data === 'd') {
    connection.write("Move: right");
     
     //send a mensage to others if you press the letter in the game
  } else if (data === 'r') {  
    connection.write("Say: let's goooo");
  } else if (data === 't') {  
    connection.write("Say: it's growing up");
  } else if (data === 'y') {  
    connection.write("Say: almost there");
  } else if (data === 'e') {  
    connection.write("Say: It's Ed here");
  };

}


module.exports = setupInput;
