// Package used to ask the user for data
const inquirer = require('inquirer');

// Package for writing files
const fs = require('fs');
const util = require("util");
const writeFile = util.promisify(fs.writeFile);

// Require the Manager, Engineer, and Intern classes
const Manager = require('./Lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Require the questions prompt
const questions = require('./src/questions');

// Generate the html
const teamHTML = require('./src/page-template');

// Create an empty array list to store employee objects
const employeeList = [];

// Function to gather manager data
async function manager() {
    // its own usage of inquirer.promt()
    const answers = await inquirer.prompt(questions.manager)
    // THEN Build a manager object and PUSH to employeeList array
    employeeList.push(new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.office));

    employee();
}
    
// Function to gather Engineer data
async function engineer() {
    // inquirer.prompt()
    const answers = await inquirer.prompt(questions.engineer)
    // THEN Build an Engineer object and PUSH to employeeList array
    employeeList.push(new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github););

    employee();
}
    
// Function to gather intern data
async function intern() {
    // inquirer.prompt()
    const answers = await inquirer.prompt(questions.intern)
    // THEN build an intern object and PUSH to employeeList array
    employeeList.push(new Intern(answers.internName, answers.internId, answers.internEmail, answers.school));

    employee();
}
   
// Function to ask for which team member they want to add or are they done
async function employee() {
    // inquirer.prompt()
    const answers = await inquirer.prompt(questions.menu)
    // THEN decide which function to call
    if(answers.teamMember === "Engineer") {
        engineer();
    } else if(answers.teamMember === "Intern") {
        intern();
    } else {
        try {
            // Generate the HTML and write it to a file
            const pageTemplate = teamHTML(employeeList);
            await writeFile("team.html", pageTemplate);
            console.log("Success!");
        } catch(err) {
            console.error(err)
        }
    };
};


manager();




