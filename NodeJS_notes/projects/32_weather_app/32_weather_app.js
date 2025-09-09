import readline from "readline";
import Table from "cli-table3";
import chalk from "chalk";


const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



async function getWeatherData(location = "Abbottabad") {

    const API_KEY = "A7PR9XNCDE78RSU99ZZRPV5MQ";

    let API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`

    console.log(chalk.yellow("please wait getting weather data ...."));

    let response = await fetch(API_URL);

    let data = await response.json();

    return data;

}


function createTable(lat, long, resolvedAddress, timezone, des, todayMaxTemp, todayMinTemp, todayCurTemp, todayDew, todayhumidity, todayWindspeed, todaySunrise, todaySunset, todayConditions) {
    // Create table
    const table = new Table({
        head: ['Sr#', 'Attributes', 'Values'],
        colWidths: [5, 25, 70],
    });

    let now = new Date();
    // Add rows
    table.push(
        [1, 'Date', now.toLocaleDateString()],
        [2, 'Day', now.toLocaleTimeString()],
        [3, 'Latitude', lat],
        [4, 'Longitude', long],
        [5, 'Address', resolvedAddress],
        [6, 'Timezone', timezone],
        [7, 'Description', des],
        [8, 'Maximum Temperature', todayMaxTemp],
        [9, 'Minimum Temperature', todayMinTemp],
        [10, 'Current Temprature', todayCurTemp],
        [11, 'Dew', todayDew],
        [12, 'Humidity', todayhumidity],
        [13, 'Wind Speed', todayWindspeed],
        [14, 'Sunrise', todaySunrise],
        [15, 'Sunset', todaySunset],
        [16, 'Conditions', todayConditions]
    );

    return table.toString();
}

function startWeatherApp() {

    terminal.question("Enter the location: ", async (location) => {
        let weatherData = await getWeatherData(location);

        let lat = weatherData.latitude;
        let long = weatherData.longitude;
        let resolvedAddress = weatherData.resolvedAddress;
        let timezone = weatherData.timezone;
        let des = weatherData.description;
        let todayMaxTemp = weatherData.days[0].tempmax;
        let todayMinTemp = weatherData.days[0].tempmin;
        let todayCurTemp = weatherData.days[0].temp;
        let todayDew = weatherData.days[0].dew;
        let todayhumidity = weatherData.days[0].humidity;
        let todayWindspeed = weatherData.days[0].windspeed;
        let todaySunrise = weatherData.days[0].sunrise;
        let todaySunset = weatherData.days[0].sunset;
        let todayConditions = weatherData.days[0].conditions;

        let weatherDataTable = createTable(lat, long, resolvedAddress, timezone, des, todayMaxTemp, todayMinTemp, todayCurTemp, todayDew, todayhumidity, todayWindspeed, todaySunrise, todaySunset, todayConditions)
        console.clear()
        console.log(chalk.red(`Here is weather update of ${resolvedAddress}`));
        console.log(weatherDataTable);
        startWeatherApp();
    })
}


startWeatherApp()

















