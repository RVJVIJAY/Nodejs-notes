const path=require('path')
const fs=require('fs')
const fspromise=require('fs').promises

/* fs.writeFile(path.join(__dirname,'Write.txt'),'this way to we can write the content into file',(err,data)=>{
    if (err) throw err;
    console.log('write completed')
    fs.appendFile(path.join(__dirname,'Write.txt'),'\n add one more content or update content',(err,data)=>{
        if (err) throw err;
        console.log('append completed')
        fs.rename(path.join(__dirname, 'Write.txt'), path.join(__dirname, 'Writed.txt'), (err) => {
            if (err) throw err;
            console.log('Rename completed');
        });
    })
}) */

/* the above process is performed like callback hell it run one bye one  funtion callback */

/* to avodi callback hell method  */
const filesystem=async()=>{
  try{
    const data= await fspromise.writeFile(path.join(__dirname,'Write.txt'),'this way to we can write the content into file')
    console.log('write completed...')
    await fspromise.appendFile(path.join(__dirname,'Write.txt'),'\n add one more content or update content')
    console.log('append completed')
    await fspromise.rename(path.join(__dirname, 'Write.txt'), path.join(__dirname, 'Writed.txt'))
        console.log('Rename completed');
    await fspromise.unlink(path.join(__dirname,'Writee.txt'))
    console.log('Delete completed')
  }catch(err){
    console.error(err)
  }
}
filesystem();
process.on('uncaughtException',(err)=>{
    console.log('there was an error while writing the file ')
    process.on(1)
})