const fs=require('fs');
console.log(fs);
// write
fs.writeFile('demo.js',"hello",(err)=>{
    if(err) throw err;
    console.log("file created successfully");
})       


// read
fs.readFile('demo.js','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})

// // update

fs.appendFile('demo.js','\n everyone',(err)=>{
    if(err) throw err;
    console.log('content updated successfully');
})


// // delete

fs.unlink("demo.js",(err)=>{
    if(err) throw err;
    console.log("deleted successfully");
})


// fs=require('fs');
// console.log(fs);
// fs.writeFile('demo.js',"hello",(err)=>{
//         if(err) throw err;
//         console.log("file created successfully");
//        })

// fs.readFile('demo.js','utf-8',(err,data)=>{
//         if(err) throw err;
//         console.log(data);
//         })

// fs.appendFile('demo.js','\n everyone',(err)=>{
//         if(err) throw err;
//         console.log('content updated successfully');
//         })

// fs.unlink("demo.js",(err)=>{
//         if(err) throw err;
//          console.log("deleted successfully");
//         })