
console.log("-----Method One------")
const add=(a,b)=>a+b
const mul=(a,b)=>a*b
const div=(a,b)=>a/b
const sub=(a,b)=>a-b
module.exports={add,mul,div,sub}

console.log("------Method Two or alternate method to export the funtions -------")
exports.add=(a,b)=>a+b
exports.mul=(a,b)=>a*b
exports.div=(a,b)=>a/b
exports.sub=(a,b)=>a-b
