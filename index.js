// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name of title',
        message: 'What do you want the name of the title?(Required)',
        validate: nameInput =>{
            if(nameInput){
                return true;
            }
            else{
                console.log('Please enter a title.')
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'Purpose',
        message: 'What is the purpose of the project?(Required)',
        validate: nameInput =>{
            if(nameInput){
                return true;
            }
            else{
                console.log('Please fill out the description')
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'Build',
        message: 'What was it built with?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
