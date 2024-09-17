const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'newfolder');

if (!fs.existsSync(dirPath)) {
  
    fs.mkdir(dirPath, (err) => {
        if (err) throw err;
        console.log('Directory is created');
    });
} else {
  
    fs.rmdir(dirPath, (err) => {
        if (err) throw err;
        console.log('Directory is removed');
    });
}

process.on('uncaughtException', (err) => {
    console.error('There was an error:', err);
    process.exit(1); 
});
