const inquirer = require('inquirer');

const fs = require('fs');

const Manager = require('./library/Manager');
 
const Engineer = require('./library/Engineer');

const Intern = require('./library/Intern');

const createPage = require ("./src/create-page");

console.log("Welcome");

console.log("answer questions to continue");

const questions = [
    {
        type:"input",
        name:"title",
        message: "What is your name?",
        validate: name_input => {
            if (name_input){
                return true;
            } else{
                console.log("Please enter your name");
                return false;

            }
        }
    },

{
    type: "input",
    name: "description",
    message: "what is your page about?",
    validate: user_description =>{
        if (user_description){
            return true;
        } else{
            console.log("enter description");
            return false;
        }
    }
},

{
    type:"input",
    name:"install",
    message: "how to install?",
    validate: user_install => {
        if (user_install) {
            return true;
        } else{
            console.log("enter install steps");
            return false;

        }
    }
},

{
    type:"input",
    name:"usage",
    message: "how to use?",
    validate: user_usage => {
        if (user_usage){
            return true;
        } else{
            console.log("enter how to use");
            return false;

        }
    }
},

{
    type:"checkbox",
    name:"license",
    message: "choose license",
    choices: ["MPL 2.0","APACHE","MIT","NONE"],
    validate: name_input => {
        if (name_input){
            return true;
        } else{
            console.log("Select license");
            return false;

        }
    }
},
{
    type:"input",
    name:"contribution",
    message: "how can others contribute?",
    validate: user_contribution => {
        if (user_contribution){
            return true;
        } else{
            console.log("provide others on how to contribute");
            return false;

        }
    }
},
{
    type:"input",
    name:"test",
    message: "how to test",
    validate: user_test => {
        if (user_test){
            return true;
        } else{
            console.log("how to test");
            return false;

        }
    }
},

{
    type:"input",
    name:"github",
    message: "What is your github username?",
    validate: user_github => {
        if (user_github){
            return true;
        } else{
            console.log("enter github username");
            return false;

        }
    }
},

{
    type:"input",
    name:"email",
    message: "What is your email?",
    validate: user_email => {
        if (user_email){
            return true;
        } else{
            console.log("enter email");
            return false;

        }
    }
},











]