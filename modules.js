const fs = require('fs');
const os = require('os');

fs.writeFileSync("dummy.text","this is dummy data");

console.log(os.platform());
console.log(os.hostname());

