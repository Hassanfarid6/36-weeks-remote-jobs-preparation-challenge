// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// hello     world    my    name   is       saif

// After the program runs, the output should be
// hello world my name is saif


// `fs` module ko import karo, jo files ke saath kaam karne ke liye hai
const fs = require("fs");

// File ka path define karo jise clean karna hai
const filePath = "./input.txt";

// File ko read karo
fs.readFile(filePath, "utf8", (error, data) => {
    // Agar file read karne mein error ho, to error print karo
    if (error) {
        console.log("Error reading file:", error);
        return;
    }

    // File ke content se extra spaces hatayo
    // `trim()` se shuru aur end ke spaces hataye
    // `split(/\s+/)` se ek ya zyada spaces ko split karke words banaye
    // `join(" ")` se words ko single space ke saath jodo
    const cleanedData = data.trim().split(/\s+/).join(" ");

    // Cleaned content ko wapas usi file mein likho
    fs.writeFile(filePath, cleanedData, "utf8", (writeError) => {
        // Agar file likhne mein error ho, to error print karo
        if (writeError) {
            console.log("Error writing file:", writeError);
            return;
        }
        // Agar sab theek ho, to success message print karo
        console.log("File cleaned successfully!");
    });
});
