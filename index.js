// require your server and launch it
const server = require("./api/server.js");

const port = 3000;

server.listen(port, () => {
  console.log(`\n***Server Up on Port: ${port}***\n`);
});