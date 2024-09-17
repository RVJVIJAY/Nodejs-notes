const fs=require('fs')
const path=require('path')


const rs=fs.ReadStream(path.join(__dirname,'read.txt'),'utf-8')
const ws=fs.WriteStream(path.join(__dirname,'writefilefromreadfile'))

rs.pipe(ws)


/* the above is mainly usefull to read more no of content like long files */
/* the above scenario is 1st read the file after write the content from the read file */