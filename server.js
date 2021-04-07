console.clear();
const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT;

const server = http.createServer(app);

console.log(`Server is listening on port ${port}`);
server.listen(port);