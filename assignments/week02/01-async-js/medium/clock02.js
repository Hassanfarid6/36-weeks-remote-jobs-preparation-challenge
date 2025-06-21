// Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows
// you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)
// HH:MM::SS AM/PM (Eg 01:45:23 PM)


let count = 1

function showClock(){
    const now = new Date()

    // 24 hours format
    const hours24 = String(now.getHours()).padStart(3,"0")
    const minutes = String(now.getMinutes()).padStart(2,"0")
    const seconds = String(now.getSeconds()).padStart(2,"0")

    // 12 hours format
    const hours12 = now.getHours() % 12 || 12
    const ampm = now.getHours() >= 12 ? "PM" : "AM"
    const time12 = `${String(hours12).padStart(2,"0")}:${minutes}:${seconds} ${ampm}`

    console.log(`24-Hour: ${hours24}:${minutes}:${seconds} | 12 Hour: ${time12}`)

    if (count <= 10){
        count += 1
        setTimeout(showClock, 1000);
    }else{
        console.log("Clock stopped after 10 seconds.")
    }
}

showClock()