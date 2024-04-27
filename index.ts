#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() *6 + 1);
//console.log(randomNumber);

const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type : "number",
        message : "Please guess a number between 1-10",
    },
]);

if(answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.")
} else {
    console.log("You have guessed wrong number.Try again!")
};