// @ts-nocheck
const os = require("os")

console.log("Platform: "+ os.platform())
console.log("Os Type: "+ os.type())
console.log("CPU's : "+ os.cpus().map(data => console.log(data)))
console.log("Os architecture: "+ os.arch())
console.log("Os Free memory: "+ os.freemem())
console.log("Total memory: "+ os.totalmem())
console.log("host name: "+ os.hostname())
console.log("Home Directory: "+ os.homedir())