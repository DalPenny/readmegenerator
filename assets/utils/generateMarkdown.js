// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'GNU GPL 3.0') {
    return `https://www.gnu.org/licenses/agpl-3.0.html`
  }
  if (license === 'Apache') {
    return `http://www.apache.org/licenses/
    ` 
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {if (!license) {
  return ``;
} else {
  return `## Licenses
  This project is covered under the ${license} license. Please click on the license button to get more info.`
  }
}

// Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.title}

  ${renderLicenseBadge(answer.licenses)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Github](#github)
  * [Email Address](#email)
  * [Licenses](#licenses)

  
  ## Description
  ${answer.description}

  ## Installation
  ${answer.installation}

  ## Usage
  ${answer.usage}
  ${renderLicenseSection(answer.licenses)}
  
  ## Contributing
  ${answer.contributing}
  
  ## Tests
  ${answer.tests}
  
  ## Github
  Have questions about this project?  
  GitHub: https://github.com/${answer.github}  
  Email: ${answer.email}

`;
}

module.exports = generateMarkdown;
