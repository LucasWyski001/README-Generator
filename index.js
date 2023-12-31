// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What do you want the name of the title?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is the description of your project',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Enter installation details',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'enter usage informaiton',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'enter any contributions',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'enter any test instructions for the project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license do you want for your project',
        choices: ['MIT', 'GPLv3', 'Apache', 'unlicense', 'BSD'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your email address',
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = typeof data ==='string' ? data : JSON.stringify(data, null, 2);

    fs.writeFile(fileName, content, (err) =>{
        if(err){
            console.error('error making file: ', err);
        }
        else{
            console.log('File successfully created: ', fileName);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data)=>{
        writeToFile('README.md', generateMarkdown(data));
    })
    .catch((error)=>{
        console.error('error:', error);
    })
}
// Function call to initialize app
init();
