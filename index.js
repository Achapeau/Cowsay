const student = require ("./information.js");
const cowsay = require("cowsay")

console.log(cowsay.say({
    text : `Hello! I'm ${student.name} and I'm in ${student.campus} campus`,
    e : "*O",
    T : "U"

}))