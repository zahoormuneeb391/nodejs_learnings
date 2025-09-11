import dotenv from "dotenv";

dotenv.config();
console.log("Environment Variables are: ")

console.log("WIN_PORT form Windows EV", process.env.WIN_PORT);
console.log("DEV form Windows EV", process.env.DEV);
console.log("PORT form .env file", process.env.PORT);
console.log("WIN_PORT form Windows .env file", process.env.WIN_PORT);

// Great Priorty = Local Machine
// Less Priorty = .env file