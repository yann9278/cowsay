const userInfo = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${userInfo.name} and I'm in ${userInfo.campus}`,
    e: '_O',
    T: 'U'
}));