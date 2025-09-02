//! NodeJS Emitter :)
//? Definition:
// EventEmitter is a Node.js feature that lets objects communicate using events.
// You can emit (trigger) events and listen (react) to them using functions called listeners.

// Emit an event → something happened
// Listen to an event → do something when that happens

//! Analogy:

//? Think of it like a notification system:
// You send a notification → emit
// People react to that notification → listeners


//! EventEmitter object has these important methods.

//? .on(event, listener) → Attaches a listener for the event (can be attached multiple times).

//? .once(event, listener) → Runs only once, then the listener is removed.

//? .emit(event, ...args) → Triggers the event and sends arguments to listeners.

//? .removeListener(event, listener) → Removes a specific listener.

//? .off(event, listener) → Also used to remove a listener (modern version).

//? .removeAllListeners(event) → Removes all listeners for that event.

//? .listeners(event) → Returns an array of all listeners attached to the event.

//? .listenerCount(event) → Returns the number of listeners attached to the event.


//! Trick to remember :)
//* EventEmitter = Teacher
//* on = Student listening 
//* emit = Teacher pass message/signal
//* once = Student listening once
//* off = Student stop listening
//* removeAllListeners = All students stop listening
//* removeListener = Student stop listening
//* listeners = List of all students listening
//* listenerCount = Count of all students listening


//! -------------------------------------------------------

// const { EventEmitter } = require("events");
import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

// myEmitter.on("bellRing", () => {
//     console.log("Bell Ringing ....!!");
// })
// myEmitter.on("bellRing", () => {
//     console.log("Light On ....!!");
// })
// myEmitter.on("bellRing", () => {
//     console.log("Camera activated ....!!");
// })

// myEmitter.emit("bellRing");


const ringBell = () => {
    console.log("Bell Ringing ....!!");
}

const lightOn = () => {
    console.log("Light On ....!!");
}

const activateCamera = () => {
    console.log("Camera activated ....!!");
}

myEmitter.on("bellRing", ringBell)
myEmitter.on("bellRing", lightOn)
myEmitter.on("bellRing", activateCamera)

// myEmitter.off("bellRing", lightOn)
// myEmitter.removeAllListeners("bellRing");
const bellRingEvents = myEmitter.listenerCount("bellRing")
const bellRingListners = myEmitter.listeners("bellRing")

myEmitter.emit("bellRing");
console.log("bellRing Events: " + bellRingEvents);
console.log(bellRingListners);