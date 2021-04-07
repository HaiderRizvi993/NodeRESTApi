console.clear()
const dotenv = require('dotenv');

dotenv.config()

console.log(process.env.MongoURL)
console.log(process.env.PORT)