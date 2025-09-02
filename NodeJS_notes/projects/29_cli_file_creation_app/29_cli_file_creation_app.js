//! Imports ....
import fs from 'fs';
import chalk from 'chalk';
import readline from 'readline';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

//! ES6 __dirname & __filename  ....
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//! creating read
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//! Welcome Function .....
(function welcome() {
    console.log(chalk.blue("\nWelcome to " + chalk.yellow("'CLI File System App'")))
})();

//! Menu or Buttons for different tasks .....
function showMenu() {
    console.log(
        chalk.yellow("\n1.") + chalk.cyan("Create File\n") +
        chalk.yellow("2.") + chalk.cyan("Create Directory\n") +
        chalk.yellow("3.") + chalk.cyan("Delete File\n") +
        chalk.yellow("4.") + chalk.cyan("Delete Directory\n") +
        chalk.yellow("5.") + chalk.cyan("Rename File\n") +
        chalk.yellow("6.") + chalk.cyan("Rename Directory\n") +
        chalk.yellow("7.") + chalk.cyan("Exit \n\n") +
        chalk.blue("Press ") + chalk.yellow("'7'") + chalk.blue(" or type ") + chalk.yellow("'clear'") + chalk.blue(" or ") + chalk.yellow("'exit'") + chalk.blue(" to leave the app")
    );
    rl.question("\nChoose the option : ", handleInput)
};
showMenu();

//! checking file or directory difference ....
const checkType = (path) => {
    let stats = fs.statSync(path);
    let type = stats.isFile() ? "file" : stats.isDirectory() ? "directory" : "Unknown";
    return type;;
}

//! main Function which handles all inputs of user .....
function handleInput(option) {


    switch (option) {

        case "1":
            handleCreateFile();
            break;

        case "2":
            handleCreateDir();
            break;

        case "3":
            handleDeleteFile();
            break;

        case "4":
            handleDeleteDir();
            break;

        case "5":
            handleRenameFile();
            break;

        case "6":
            handleRenameDir();
            break;

        case "7":
        case "clear":
        case "exit":
            handleExit();
            break;

        default:
            handleInvalidOption();
            break;
    }
}


//! Handlers .....


//* handleCreateFile 
function handleCreateFile() {
    rl.question("Enter filename: ", (fn) => {
        let p = __dirname + "/" + fn;
        if (fs.existsSync(p)) {
            console.log(chalk.red("File already exists ❌"));
            showMenu();
        } else {
            fs.writeFile(p, "", (err) => {
                if (err) {
                    console.log(chalk.red("Error creating file: ", err))
                    showMenu();
                } else {
                    console.log(chalk.greenBright("File Created Successfully"));
                    showMenu();
                }
            })
        }
    })
}

//* handleCreateDir
function handleCreateDir() {
    rl.question("Enter directory name: ", (dn) => {
        let p = __dirname + "/" + dn;
        if (fs.existsSync(p)) {
            console.log(chalk.red("Directory already exists."));
            showMenu();
        } else {
            fs.mkdir(p, (err) => {
                if (err) {
                    console.log(chalk.red("Error creating directory: ", err.message))
                    showMenu();
                } else {
                    console.log(chalk.greenBright("Directory Created Successfully"));
                    showMenu();
                }
            })
        }
    })
}

//* handleDeleteFile
function handleDeleteFile() {
    rl.question("Enter filename you want to delete: ", (fn) => {
        let p = path.join(__dirname, fn);
        if (fs.existsSync(p)) {
            const type = checkType(p);
            if (type !== "file") {
                console.log("Type:", type);
                console.log(chalk.red(`Not a file ❌`));
                showMenu();
            } else {
                fs.unlink(p, (err) => {
                    if (err) {
                        console.log(chalk.red("Error deleting file: ", err.message));
                        showMenu();
                    } else {
                        console.log(chalk.greenBright("File deleted successfully"));
                        showMenu();
                    }
                })
            }
        } else {
            console.log(chalk.yellow(`'${fn}'`) + chalk.red(" No such file exists ❌"));
            showMenu();
        }
    })
}

//* handleDeleteDir
function handleDeleteDir() {
    rl.question("Enter directory you want to delete: ", (dn) => {
        let p = path.join(__dirname, dn);
        if (fs.existsSync(p)) {
            const type = checkType(p);
            if (type !== "directory") {
                console.log(chalk.blue("Type:") + chalk.yellow(type));
                console.log(chalk.red(`not a directory`));
                showMenu();
            } else {
                console.log(chalk.greenBright("all the sub-files and sub-directories will be deleted too"));
                rl.question("y to confirm / n to cancel: ", (ans) => {
                    if (ans.toLowerCase() === 'y') {
                        fs.rm(p, { recursive: true, force: true }, (err) => {
                            if (err) {
                                console.log(chalk.red("Error deleting directory: ", err.message));
                                showMenu();
                            } else {
                                console.log(chalk.greenBright("Directory deleted successfully"));
                                showMenu();
                            }
                        })
                    } else {
                        showMenu();
                    }
                })
            }
        } else {
            console.log(chalk.yellow(`'${dn}'`) + chalk.red(" No such directory exists ❌"));
            showMenu();
        }
    })
}

//* handleRenameFile 
function handleRenameFile() {
    rl.question("Enter filename: ", (fn) => {
        let p = path.join(__dirname, fn);
        if (fs.existsSync(p)) {
            const type = checkType(p);
            if (type !== "file") {
                console.log("Type:", type);
                console.log(chalk.red(`Not a file ❌`));
                showMenu();
            } else {
                console.log(chalk.greenBright("file exists"));
                rl.question("Enter new filename: ", (newFn) => {
                    let newP = __dirname + "/" + newFn;
                    fs.rename(p, newP, (err) => {
                        if (err) {
                            console.log(chalk.red("Error renaming file: ", err.message))
                            showMenu();
                        } else {
                            console.log(chalk.greenBright("File Renamed Successfully"));
                            showMenu();
                        }
                    })
                })
            }
        } else {
            console.log(chalk.yellow(`'${fn}'`) + chalk.red(" No such file exists ❌"));
            showMenu();
        }
    })
}

//* handleRenameDir 
function handleRenameDir() {
    rl.question("Enter filename: ", (dn) => {
        let p = path.join(__dirname, dn);
        if (fs.existsSync(p)) {
            const type = checkType(p);
            if (type !== "directory") {
                console.log("Type:", type);
                console.log(chalk.red(`Not a Directory ❌`));
                showMenu();
            } else {
                console.log(chalk.greenBright("directory exists"));
                rl.question("Enter new directory name: ", (newDn) => {
                    let newP = __dirname + "/" + newDn;
                    fs.rename(p, newP, (err) => {
                        if (err) {
                            console.log(chalk.red("Error renaming directory: ", err.message))
                            showMenu();
                        } else {
                            console.log(chalk.greenBright("Directory Renamed Successfully"));
                            showMenu();
                        }
                    })
                })
            }
        } else {
            console.log(chalk.yellow(`'${dn}'`) + chalk.red(" No such directory exists ❌"));
            showMenu();
        }
    })
}

//* handleExit
function handleExit() {
    rl.close();
    console.log(chalk.blue("Thanks for using ") + chalk.yellow("'CLI File System App'"));
}

//* handleInvalidOption
function handleInvalidOption() {
    console.log(chalk.bgRed("Invalid Option ") + chalk.yellow(" (Choose form 1 - 7)"));
    showMenu();
}