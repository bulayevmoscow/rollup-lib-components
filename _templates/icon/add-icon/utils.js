const fs = require('fs')

// list all files in the directory


const listOfFilesRecursive = (dir) => {
    const results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results.push(...listOfFilesRecursive(file));
        } else { 
            results.push(file);
        }
    });
    return results;
}


module.exports = {
  listOfFilesRecursive
}