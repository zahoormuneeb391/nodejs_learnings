//! Nodejs CLI Todo App :)

//! Imports
import readLine from "readline";
import chalk from "chalk";

let success = chalk.whiteBright.bgGreenBright;
let error = chalk.white.bgRed;


//! Creating InterFace using readLine
const interFace = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

//! Todo Array
let todo = [];

//! showOptions() Function
const showOptions = () => {
    console.log(chalk.yellow.bold("\n01"), chalk.black.bgWhite("Add Task \n"));
    console.log(chalk.yellow.bold("02"), chalk.black.bgWhite("Show Tasks \n"));
    console.log(chalk.yellow.bold("03"), chalk.black.bgWhite("Update Task \n"));
    console.log(chalk.yellow.bold("04"), chalk.black.bgWhite("Delete Task \n"));
    console.log(chalk.yellow.bold("05"), chalk.black.bgWhite("Exit\n"));
    console.log(chalk.blueBright("Type") + chalk.yellowBright.bold(" 'clear' ") + chalk.blueBright("or") + chalk.yellowBright.bold(" '5' ") + chalk.blueBright("to Exit\n"));
    interFace.question(chalk.greenBright("Choose an option: "), handleInput);
}
showOptions();


//! Options Functions 
//* handleAddTask()
const handleAddTask = () => {
    interFace.question(chalk.redBright("Enter a task: "), (task) => {
        console.log(success(`Task added successfully!`));
        todo.push(task);
        showOptions();
    });
}

//* handleShowTasks()
const handleShowTasks = () => {
    console.log(chalk.blue("\nTotal Task: " + chalk.yellow(todo.length)));
    todo.forEach((task, index) => {
        console.log(index + 1, task);
    });
    showOptions();
}

//* handleUpdateTask()
const handleUpdateTask = () => {
    interFace.question(chalk.redBright("Enter task number to update: "), (taskNumber) => {
        if (taskNumber > 0 && taskNumber <= todo.length) {
            interFace.question(chalk.cyan("Enter updated task: "), (updatedTask) => {
                todo[taskNumber - 1] = updatedTask;
                console.log(success(`Task ${taskNumber} updated successfully`));
                showOptions();
            })
        } else {
            console.log(error("Invalid Task Number"));
            showOptions();
        }
    })
}

//* handleDeleteTask()
const handleDeleteTask = () => {
    interFace.question(chalk.redBright("Enter task number to delete: "), (taskNumber) => {
        if (taskNumber > 0 && taskNumber <= todo.length) {
            todo = todo.filter((task, index) => {
                if (taskNumber != index + 1) {
                    return task;
                }
            })
            console.log(success(`Task ${taskNumber} deleted successfully`));
            showOptions();
        } else {
            console.log(error(`Task Number ${taskNumber} not exist`));
            showOptions();
        }
    })
}

//* handleExit();
const handleExit = () => {
    console.log(chalk.blue("\nThanks for using ") + chalk.bold.bgYellowBright("CLI Todo App."));
    interFace.close();
}

//! MAIN Functions 
//! handleInput (TODO LIST)
function handleInput(option) {
    if (option == 1) {
        handleAddTask();
    } else if (option == 2) {
        handleShowTasks();
    } else if (option == 3) {
        handleUpdateTask();
    } else if (option == 4) {
        handleDeleteTask();
    } else if (option == 5 || option == "clear") {
        handleExit();
    } else {
        console.log(error("Invalid Option"));
        showOptions();
    }
}
