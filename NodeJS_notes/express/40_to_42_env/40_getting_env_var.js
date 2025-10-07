import dotenv from "dotenv";

dotenv.config({ path: "../../../.env" });
// console.log("Environment Variables are: ")

console.log("PORT form Windows EV", process.env.WIN_PORT);
console.log("DEV form Windows EV", process.env.WIN_DEV);

console.log("PORT form .env file", process.env.PORT);
console.log("DEV form .env file", process.env.DEV);


// console.log(process.env)
// Great Priorty = Local Machine
// Less Priorty = .env file