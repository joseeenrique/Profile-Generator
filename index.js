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
        choices: [ "Intern", "Engineer", "Manager"]
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

 // create employee funtion
 const newEmployee = async () => {
    await inquirer.prompt(questions)
      .then((response) => {
        let name = response.name;
        let id = response.id;
        let email = response.email;
        let idNumber;
        let github;
        

        if (role === "Engineer") {
            inquirer.prompt(engineerQuestions).then((response) =>{
                github = response.github;
                let employee = new Engineer(name, id, email, github);
                employeesArr.push(employee);
                addEmployee(employeesArr);
                });
        }
        else if (role === "Manager") {
            inquirer.prompt(managerQuestions).then((response) =>{
                    officeNumber = response.officeNumber;
                    let employee = new Manager(name, id, email, officeNumber);
                    employeesArr.push(employee);
                    addEmployee(employeesArr);
                });
            }
            else if (role === "Intern") {
                inquirer.prompt(internQuestions).then((response) =>{
                        officeNumber = response.officeNumber;
                        let employee = new Intern(name, id, email, officeNumber);
                        employeesArr.push(employee);
                        addEmployee(employeesArr);
                    });
                }
            init();