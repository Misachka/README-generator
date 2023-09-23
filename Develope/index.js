// Declaring variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generatemarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

//Questions to generate the README.md
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is your project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Please write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "If any, Please escribe the installation process: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What will be your project used for?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "GNU",
                "ISC",
                "MIT",
                "Mozilla Public License 2.0",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do to do if user has questions/issues? "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
} 
  
  init();  