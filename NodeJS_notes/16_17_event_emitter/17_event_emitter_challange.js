//! Nodejs First Task

//! Objective:
//* Create a program using Nodejs Event Emitter that:

//? Listen multiple type of user event (e.g login, logout, purchase and profileUpdate)
//? Track how many times each event is emitted.
//? Logs a summary of all event occurance when a sepcial event is triggered


//! Requirements:
//? Create atleast four custom events (user-login, user-logout, user-purchase, profile-update)
//? Emit these events multiple times with different agruments (e.g username, item-purchased)
//? Track and store cout of each event type.
//? Define a summary that logs a detailed report of how many times each event was triggered


//! Code:

//! Importing Required Modules
const fs = require("fs");
const path = require("path");
const events = require("events");


//! Creating Event Emitter Instance
const emitter = new events.EventEmitter();

const filePath = path.join(__dirname, "eventsCount.json");
let eventsCount = {};


function checkExportCountFile() {

    if (fs.existsSync("eventsCount.json")) {
        eventsCount = JSON.parse(fs.readFileSync(filePath), "utf-8");
    } else {
        console.log("File does not exist, creating new file");
        eventsCount = {
            "user-login": 0,
            "user-logout": 0,
            "user-purchase": 0,
            "profile-update": 0
        }
    }

}
checkExportCountFile();

function saveEventCount() {
    fs.writeFileSync("eventsCount.json", JSON.stringify(eventsCount), "utf-8");
}

function updateLogs(event) {
    let now = new Date();
    let dateNTime = `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`;

    let log = `${event.toUpperCase()} - ${dateNTime}`;

    fs.appendFile(path.join(__dirname, "logs.txt"), `${log}\n`, (err) => {
        if (err) {
            console.log("Error updating logs.txt: ", err)
        }
        console.log(log);
    });
}


//! Event Listners :)
emitter.on("user-login", (username) => {
    eventsCount["user-login"]++;
    console.log(`${username} login...! \n`);
    saveEventCount();
    updateLogs("user-login")
})
emitter.on("user-logout", (username) => {
    eventsCount["user-logout"]++;
    console.log(`${username} logout...! \n`);
    saveEventCount();
    updateLogs("user-logout")
})
emitter.on("user-purchase", (username, product) => {
    eventsCount["user-purchase"]++;
    console.log(`${username} purchase ${product}...! \n`);
    saveEventCount();
    updateLogs("user-purchase")
})
emitter.on("profile-update", (username) => {
    eventsCount["profile-update"]++;
    console.log(`${username} update profile ...! \n`);
    saveEventCount();
    updateLogs("profile-update")
})



//! Events Emittings )
emitter.emit("user-login", "Muneeb Zahoor");
emitter.emit("user-purchase", "Muneeb Zahoor", "Phone");



//! Summary Event Listner :)
emitter.on("summary", () => {
    console.log(JSON.parse(fs.readFileSync(filePath, "utf-8")));
})

emitter.emit("summary")
