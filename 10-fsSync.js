const {readFileSync, writeFileSync} = require('fs');

//the above is same as below
// const fs = require('fs');
// fs.readF
console.log('start');
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first, second);
writeFileSync("./content/result-sync.txt", 
`here is result ${first}, ${second}`, 
{flag:'a'});
console.log('done ');
console.log('starting next');