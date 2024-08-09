const { log } = require('console');
const path=require('path')
console.log(path);  //over all path
console.log(path.basename(__filename));   //file name with extention
console.log(path.dirname(__filename));    //directory name
console.log(path.extname(__filename));    //the file extension.
console.log(path.parse(__filename));    //object with detailed path
console.log(path.join(__dirname,"api","script.js"))    //create a new path create 


