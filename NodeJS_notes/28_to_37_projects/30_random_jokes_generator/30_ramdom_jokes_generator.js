import https from 'https';
import chalk from 'chalk';


let API_URL = 'https://official-joke-api.appspot.com/random_joke';

//! Using https module to fetch data.
function getRandomJoke() {

    https.get(API_URL, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        })

        res.on('end', () => {
            let joke = JSON.parse(data)
            console.log("\nhttps.get(API, callback())");
            console.log(chalk.bgWhite.black(joke.type));
            console.log(chalk.blue(joke.setup));
            console.log(chalk.red(joke.punchline));
        })

        res.on("error", (err) => {
            console.log("Error: ", err.message);
        });
    })
}

//! using fetch API to fetch data.
function fetchJokes() {

    fetch(API_URL)
        .then((res) => { return res.json() })
        .then((data) => {
            console.log("\nfetch(API).then().then().catch()");
            console.log(chalk.bgWhite.black(data.type));
            console.log(chalk.blue(data.setup));
            console.log(chalk.red(data.punchline));
        })
        .catch((err) => { console.log("Error: ", err) });

}

//! using fetch API with async/await to fetch data.
async function fetchJokesAsyncAwait() {
    let res = await fetch(API_URL);
    let data = await res.json();
    console.log("\nasync/awiat:");
    console.log(chalk.bgWhite.black(data.type));
    console.log(chalk.blue(data.setup));
    console.log(chalk.red(data.punchline));
}


getRandomJoke();
// fetchJokes();
// fetchJokesAsyncAwait();