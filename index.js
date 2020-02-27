import readline from "readline";

import WebSocket from "ws";

const server = new WebSocket.Server(
  { port: 8080 },
  console.log("server started on port 8080")
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

server.on("connection", ws => {

  const quotes = ['Do or do not, there is no try', 'If you\'re not first, you\'re last.', 'Hello there.'];

  const quote = () => quotes[Math.floor(Math.random() * quotes.length)];

  const id = setInterval(function () {
    ws.send(`Quote: ${quote()}`, function () {
      //
      // Ignore errors.
      //
    });
  }, 5000);

  ws.on("message", message => {
    console.log("received: %s", message);
    ws.send(`echo ${message}`);
  });

  ws.on('close', function () {
    console.log('stopping client interval');
    clearInterval(id);
  });

  ws.send("Welcome to the WS server.");

  rl.on("line", input => {
    ws.send(input);
  });
});
