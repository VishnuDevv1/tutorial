// install npm package
// npm install -g <packageName>  global dependancy

//local dependancy
//npm i <packageName>

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);