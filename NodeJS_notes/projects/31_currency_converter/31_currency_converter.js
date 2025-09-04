//! CLI Based Currency Converter


//! Imports
import readLine from 'readline';
import chalk from 'chalk';


//! Creating Interface to use Terminal
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

//! getAPIData function fetch the data from API based on base_currecny by  defualt its "USD";
const getAPIData = async (base_currency = "USD") => {

    const API_KEY = "583319d472d32a646900670a";
    const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${base_currency.toUpperCase()}`;
    try {
        let response = await fetch(BASE_URL)
        if (!response.ok) {
            console.log(chalk.red("Network Error"))
            return;
        } else {
            let apiData = await response.json()
            return apiData;
        }
    } catch (err) {
        console.log(chalk.red("Something went wrong: ", err));
    }

}

//! getCurrencies function not calling API it uses getAPIData function and reterive just currencies form whole API Data
const getCurrencies = async () => {
    try {
        let data = await getAPIData()
        if (!data) {
            console.log(chalk.red("Network Error"));
            return;
        } else {

            let conversion_rates = await data.conversion_rates;
            let currencies = Object.keys(conversion_rates)
            return currencies;
        }
    } catch (err) {
        console.log("Something went wrong: ", err)
    }
}

//* App Start form here
//! Main Vairbales
let BASE_CURRENCY = "";
let TARGET_CURRENCY = "";
let AMOUNT = ""

//! startApp is the main Fucntion;
async function startApp() {
    //! Welcome Header
    console.log(chalk.blue.bold("Welcome to" + chalk.yellow("'CLI Currency Converter'")));
    //! Getting Available Currencies
    let currencies = await getCurrencies();
    //! Clossing interface if we will not get the currencies means error in data fetchin from api in getAPIData function
    if (!currencies) {
        rl.close();
    }
    //! Showing Available Currencies and exit option
    console.log(chalk.green(`Avaliable Currencies: ${chalk.yellow(currencies.length)}`))
    console.log(chalk.white(currencies))
    console.log("\nPress " + chalk.red('Ctrl + C') + " to exit");

    //!  The main fucntion which start the input handling for user all the inputhadles call inside this functions
    handleChooseBaseCurrency(currencies);
}


//! Main Funtion which handle inputs form user and also call other input handlers
function handleChooseBaseCurrency(currencies) {
    rl.question(chalk.green("Choose Base Currency:"), (bc) => {
        let a = currencies.some((cur) => {
            return cur == bc.toUpperCase();
        });
        if (!a) {
            console.log(chalk.red("Base Currency Not exists"), bc.toUpperCase());
            handleChooseBaseCurrency(currencies);
        } else {
            console.log(chalk.green("Base Currency exists"), bc.toUpperCase());
            BASE_CURRENCY = bc.toUpperCase();
            handleChooseTargetCurrency(currencies);
        }

    })
}

//! handleChooseTargetCurreny Function handle the target currency input and also validate it
function handleChooseTargetCurrency(currencies) {
    rl.question(chalk.green("Choose Target Currency:"), (tc) => {
        let a = currencies.some((cur) => {
            return cur == tc.toUpperCase();
        })
        if (!a) {
            console.log(chalk.red("Target Currency Not exists"), tc.toUpperCase());
            handleChooseTargetCurrency(currencies);
        } else {
            console.log(chalk.green("Target Currency exists"), tc.toUpperCase());
            TARGET_CURRENCY = tc.toUpperCase()
            handleEnterAmount(currencies);
        }

    })
}

//! handleEnter amout not only handle the input entered amount but also do calculation based on user input and apidate to show the final results
const handleEnterAmount = async (currencies) => {
    const apiData = await getAPIData(BASE_CURRENCY);
    rl.question(chalk.green(`Enter Amount in ${BASE_CURRENCY}:`), (amount) => {
        //! Data form API based on input BASE_CURRENCY:
        AMOUNT = amount;
        let lastUpdate = apiData.time_last_update_utc;
        let nextUpdate = apiData.time_next_update_utc;
        let conversion_rates = apiData.conversion_rates
        let finalAmount = conversion_rates[TARGET_CURRENCY] * AMOUNT;

        //! Outputs
        console.log(chalk.bgWhite.black("\nResults:"));
        console.log(`${chalk.yellow(1)} ${chalk.green(BASE_CURRENCY)} = ${chalk.yellow(conversion_rates[TARGET_CURRENCY])} ${chalk.green(TARGET_CURRENCY)}`)
        console.log(`${chalk.yellow(amount)} ${chalk.green(BASE_CURRENCY)} = ${chalk.yellow(finalAmount)} ${chalk.green(TARGET_CURRENCY)}`)
        console.log(chalk.yellow("Last Update: "), lastUpdate);
        console.log(chalk.yellow("Next Update: "), nextUpdate);
        console.log(chalk.blue("Thanks for using ") + chalk.yellow.bold("'CLI Currency Convertor'"))

        //! Exit Option and Recalling handleChooseBaseCurreny function to restart app in a loop
        console.log("\nPress " + chalk.red('Ctrl + C') + " to exit");
        handleChooseBaseCurrency(currencies);
    })
}

startApp();



// Developed By : //* Muneeb Zahoor (FullStack Developer)
// Dated:         //? 4th September 2025 (Thursday) 