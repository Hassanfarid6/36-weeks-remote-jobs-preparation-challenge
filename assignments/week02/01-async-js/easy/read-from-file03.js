// Reading the contents of a file
// Write code to read contents of a file and print it to the console. You can use
// the fs library to as a black box, the goal is to understand async tasks. Try to do an 
// expensive operation below the file read and see how it affects the output. Make the expensive
// operation more and more expensive and see how it affects the output.


// `fs` module ko import karo, jo Node.js mein files ke saath kaam karne ke liye hota hai
const fs = require("fs");

// 1. Asynchronous File Read
// `fs.readFile` ek async function hai jo file ko padhta hai
// `./file/example.txt` file ka path hai, `utf8` encoding batata hai ke file text format mein read karni hai
// Callback function (error, data) do arguments leta hai: `error` agar kuch galat ho, aur `data` jo file ka content hai
fs.readFile("./file/example.txt", "utf8", (error, data) => {
    // Agar error hua (jaise file nahi mili), to error message print karo
    if (error) {
        console.log("Error reading file: ", error);
        return; // Error ke baad code rok do
    }
    // Agar sab theek hai, to file ka content print karo
    console.log("File Contents: \n", data);
});

// 2. Expensive Operation (Heavy Loop)
// Ye ek lamba loop chala ke CPU ka time measure karta hai
// `Date.now()` current time milliseconds mein deta hai
let start = Date.now(); // Shuruaati time save karo

// `sum` variable mein ek bada number add karte jao
let sum = 0;
// 100 million (1e8) baar loop chalao, har baar `sum` mein 1 add karo
for (let i = 0; i < 1e8; i++) {
    sum += 1;
}

// Loop khatam hone ke baad ka time save karo
let end = Date.now();

// Total time (milliseconds mein) calculate karo aur print karo
console.log("Time taken (ms):", end - start);
// Loop ka result (sum) print karo
console.log("Finished Expensive Operation: ", sum);
