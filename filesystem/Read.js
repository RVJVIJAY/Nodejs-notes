const fs=require('fs')
const path=require('path')

fs.readFile(path.join(__dirname,'readfile.txt'),'utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data)
})

process.on('uncaughtException',(err)=>{
    console.error('there was an error',err)
    process.exit(1)
})