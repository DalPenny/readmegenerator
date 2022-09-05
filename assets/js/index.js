// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [ 
  {
    type: 'input',
    name: 'title',
    message: 'This is a README generator. To begin Please enter your project title: ',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Error: Please enter your project title: ');
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter your project description: ',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('Error: Please enter your project description: ');
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions: ',
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log('Error: Please provide installation instructions: ');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'Please provide usage instructions: ',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('Error: Please provide usage instructions: ');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'contributing',
    message: 'Please provide instructions on what you can contribute to this project: ',
    validate: contributionInput => {
        if (contributionInput) {
            return true;
        } else {
            console.log('Error: Please provide contributing instructions: ');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'tests',
    message: 'Please describe how the testing is done:',
    validate: testsInput => {
        if (testsInput) {
            return true;
        } else {
            console.log('Error: Please provide testing instructions: ');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'github',
    message: 'Please enter your github profile username and github link:',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Error: Please provide github profile username and link: ');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Please provide your email address so people with questions can contact you',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Error: Please provide your email address: ');
            return false;
        }
    }
},
{
    type: 'list',
    name: 'licenses',
    message: 'Please provide licenses for this application',
    choices: ['MIT', 'GPL', 'ISC'],
    validate: licensesInput => {
        if (licensesInput) {
            return true;
        } else {
            console.log('Error: Please select a license for this application ');
            return false;
        }
    }
},

];


// TODO: Create a function to write README file
// function writeToFile - this writes the answer[input] into the file
const writeToFile = answer => {
    return new Promise((resolve, reject) => {
        fs.writeFile('../../dist/README.md', answer, err => {
    // when an error, reject Promise and send error to .catch() method
            if (err) {
                reject (err);
    // return will stop the resolve() function from running continuously
                 return;
                    }
    //on successful data entry, send data to .then method and resolve Promise
            resolve({
                ok: true,
                message: console.log('Successful WriteToFile. Please go to "../../dist/README"')
                    });
          })

        })

    }

// Initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
//come here to write a file after successful asychronous task finishes
.then(readmeInfo => {
    return writeToFile(readmeInfo);
})
//gets error and logs to console
.catch(err => {
    console.log(err);
})
