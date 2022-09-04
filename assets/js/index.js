// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


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
    message: 'Enter your project description: ',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('Error: Please enter your project description: ');
            return false;
        }
    }
  },

];


// TODO: Create a function to write README file
// function writeToFile - this writes the answer[input] into the file
const writeToFile = answer => {
    return new Promise((resolve, reject) => {
        fs.writeFile('../../dist/README.md', JSON.stringify(answer), err => {
    // when an error, reject Promise and send error to .catch() method
            if (err) {
                reject (err);
    // return will stop the resolve() function from running continuously
                 return;
                    }
    //on successful data entry, send data to .then method and resolve Promise
            resolve({
                ok: true,
                message: console.log('Successful WriteToFile. Please go to "./dist/README"')
                    });
          })

        })

    }

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
//come here to write a file after successful asychronous task finishes
.then(readmeInfo => {
    return writeToFile(readmeInfo);
})
//gets error and logs to console
.catch(err => {
    console.log(err);
})
