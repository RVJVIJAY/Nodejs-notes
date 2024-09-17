const http=require('http')
const path=require('path')
const fs=require('fs')
const fspromise=require('fs').promises

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text\html'})
    fs.readFile(path.join(__dirname,'webserver','index.html'),(err,data)=>{
        if(err){
            fs.writeFile(path.join(__dirname,'webserver','error.txt'),err)
            console.log(err)
        }else{
            res.write(data)
            res.end()
        }
    })
})

server.listen(5000,(err)=>{
    if(err){
        console.log("There was an error while listening server")
    }else{
        console.log("Server is runing on ",5000)
    }
})