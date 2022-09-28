// Package used to ask the user for data
const inquirer = require('inquirer');

// Package for writing files
const fs = require('fs');

const util = require("util");
const writeFile = util.promisify(fs.writeFile);

const Manager = require('./Lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Generate the html
const teamHTML = require('./src/page-template');

// Create an empty array list to store employee objects
const employeeList = [];

// Function to gather manager data
async function manager() {
    // its own usage of inquirer.promt()
    const answers = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is the team manager's name?",
                name: "managerName",
            },
            {
                type: "input",
                message: "What is the team manager's id?",
                name: "managerId",
            },
            {
                type: "input",
                message: "What is the team manager's email?",
                name: "managerEmail",
            },
            {
                type: "input",
                message: "What is the team manager's office number?",
                name: "office",
            }
        ])
    // THEN Build a manager object
    const newManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.office);
    
    // ADD newManager to employeeList array
    employeeList.push(newManager);
    
    //console.log(employeeList);
    employee();
}
    
// Function to gather Engineer data
async function engineer() {
    // inquirer.prompt()
    const answers = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your engineer's name?",
                name: "engineerName",
            },
            {
                type: "input",
                message: "What is your engineer's id?",
                name: "engineerId",
            },
            {
                type: "input",
                message: "What is your engineer's email?",
                name: "engineerEmail",
            },
            {
                type: "input",
                message: "What is your engineer's GitHub username?",
                name: "github",
            }
        ])
    // THEN Build an Engineer object
    const newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
    
    //ADD newEngineer to employeeList array
    employeeList.push(newEngineer);

    //console.log(answers);
    employee();
}
    
// Function to gather intern data
async function intern() {
    // inquirer.prompt()
    const answers = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your intern's name?",
                name: "internName",
            },
            {
                type: "input",
                message: "What is your intern's id?",
                name: "internId",
            },
            {
                type: "input",
                message: "What is your intern's email?",
                name: "internEmail",
            },
            {
                type: "input",
                message: "What is your intern's school?",
                name: "school",
            }
        ])
    // THEN build an intern object
    const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
    
    //ADD newIntern to employeeList array
    employeeList.push(newIntern);

    //console.log(answers);
    employee();
}
   
// Function to ask for which team member they want to add or are they done
async function employee() {
    // inquirer.prompt()
    const answers = await inquirer
        .prompt([
            {
                type: "list",
                message: "What type of team member would you like to add?",
                name: "teamMember",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                ]
            }
        ])
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
    }
}

manager();