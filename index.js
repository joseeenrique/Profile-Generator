const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./library/Manager');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');
const createPage = require ("./src/create-page");

const employees = [];

const questions = [
    {
        //name
        type: "input",
        name: "name",
        message: "What is the name of the employee?"
    },
    {
        // ID
        type: "input",
        name: "id",
        message: "What is the wmployee ID?"
    },
    {
        //email
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    },
    {
        //role
        type: "list",
        name: "role",
        message: "What role does the employee have?",
        choices: ["Engineer", "Intern", "Manager"]
    },
    {
        //github
        type: "input",
        name: "email",
        message: "What is the employee's github?"
    },
]
// intern questions
internQuestions = [
    {
        type: "input",
        name: "idNumber",
        message: "What is the ID number?",
        validate: idNumber => {
            if (idNumber) {
                return true;
            } else {
                console.log("Please enter an ID number!");
                return false;
            }
        }
    }
]
// engineer questions
engineerQuestions = [
    {
        type: "input",
        name: "idNumber",
        message: "What is the ID number?",
        validate: idNumber => {
            if (idNumber) {
                return true;
            } else {
                console.log("Please enter an ID number!");
                return false;
            }
        }
    }
]
// manager questions
managerQuestions = [
    {
        type: "input",
        name: "idNumber",
        message: "What is the ID number?",
        validate: idNumber => {
            if (idNumber) {
                return true;
            } else {
                console.log("Please enter an ID number!");
                return false;
            }
        }
    }
]




init();