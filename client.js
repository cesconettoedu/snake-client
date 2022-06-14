const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  
  conn.on("connect", () => {
    conn.write("Name: EDU");
    console.log('Successfully connected to game server');
  });
  
  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });
  
  // conn.on("connect", () => {
  //   setTimeout(() => {
  //     conn.write("Move: left");
  //  }, 4000);
  // });

  return conn;
};

module.exports = connect;