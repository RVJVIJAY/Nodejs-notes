console.log('hellow')
const os=require('os')
console.log(os.type())
console.log(os.version())
console.log(os.homedir())
console.log("--------------------")
console.log(__dirname)
console.log(__filename)
console.log("--------------------")
const path=require('path')
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename)) 
console.log("--------------------")
console.log("----------parse will return all the above stuffs ----------")
console.log(path.parse(__filename))//we can access . dot to particular value
console.log(path.parse(__dirname).base)



