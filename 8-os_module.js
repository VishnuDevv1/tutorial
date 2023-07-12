const os = require('os');

const user = os.userInfo();
console.log(user);

// systen uptime
console.log(os.uptime());

const curr = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(curr);