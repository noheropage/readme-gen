// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for the project: ',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter instructions for installation: ',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information: ',
        },
        {
            type: 'list',
            name: 'license',
            choices: ['MIT', 'GPL', 'Apache', 'BSD', 'LGPL', 'AGPL', 'Other'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter the guidelines for contributing: ',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter testing instructions or examples: ',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub username: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter an email where you can be reached for additional questions: ',
        },
    ]);

// function to write README file with input data passed into generateMarkdown.js
function writeToFile(fileName, data) {
    const completedMarkdown = generateMarkdown(data);
    fs.writeFileSync(`${fileName}`, completedMarkdown);
    console.log(`Successfully created ${fileName}`);
}

// function to initialize app
function init() {
    try {
        questions().then((inputs) => {
            const fileName = `${inputs.title.toLowerCase().split(' ').join('-')}.md`;
            writeToFile(fileName, inputs);
        });
    } catch (error) {
        console.log(error);
    }
}

// Function call to initialize app
init();