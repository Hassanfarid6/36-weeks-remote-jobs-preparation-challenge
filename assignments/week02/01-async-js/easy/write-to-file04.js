// Write to a file
// Using the fs library again, try to write to the contents of a file. You can use the fs
// library to as a black box, the goal is to understand async tasks.

const fs = require("fs")

const content = "Hello! This file was written using fs.writeFile() in Node.js."

fs.writeFile("./file/output.txt",content,"utf-8", (err)=>{
    if (err){
        console.log("Error Wrting file: ",err)
        return
    }
    console.log("File written Successfully!")
})

// Expensive operations
let sum = 0
for (let i=0; i < 1e8; i++){
    sum += 1
}
console.log("Finished expensive task:", sum);