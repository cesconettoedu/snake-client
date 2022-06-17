const net = require("net");
const { IP, PORT } = require("./constants");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  
  conn.on("connect", () => {
    // just asking players name to not be a fixed one
    rl.question(`What's your name? `, (playerName) => {
      console.log(`${playerName.trim()}  is connecting ...`);
      // just animation to pretend that's loading
      const spinner2 = ("-\|/-\|/-\|/-\|/-\|/-\|/-");
      for (let i = 0; i < spinner2.length; i ++) {
        setTimeout(() => {
          process.stdout.write(`\r ${spinner2[i]}   `);
          if (i + 1 === spinner2.length)
            process.stdout.write('\n');
        }, i * 50);
      }

      setTimeout(() => {
        console.log(`${playerName.trim()} successfully connected to game server.`);
      }, 1000);
      setTimeout(() => {
        console.log('You can start PLAY!');
      }, 1500);
      

      const connections = []; //
      connections.push(playerName); //

      

      conn.write(`Name: ${playerName}`);
    });
  });
 
  return conn;  //is the output from connect function
};

module.exports = connect;