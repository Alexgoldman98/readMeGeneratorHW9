// Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs')

// Create an array of questions for user input
async function getUserInput(){
    var responses = await inquirer.prompt([ 
        {   
            message: "What is the name of your project?",
            type: 'input',
            name:'title', 
        },{
            message: "Please enter a project description.",
            type: 'input',
            name:'description',
        },{
            message: "Please enter any installation instructions",
            type: 'input',
            name:'install',
        },{
            message: "Please enter any usage information",
            type: 'input',
            name:'usage',
        },{
            message: "Please enter any contribution guidelines",
            type: 'input',
            name:'contribution',
        },{
            message: "Please enter any test instructions",
            type: 'input',
            name:'test',
        },{
            message: "Please select the type of license",
            type: 'list',
            name:'license',
            choices: [`MIT`, `APACHE-2.0`,`GPL-3.0`, `BSD-2-Clause`,`BSD-3-Clause`]
        },{
            message: "What is your github profile link?",
            type: "input",
            name: "gitLink",
        },{
            message: "What is your github username?",
            type: "input",
            name: "gitUser",
        },{
            message: "Please enter your email address",
            type: "input",
            name: "email", 
        }
     ])
     fs.writeFileSync('README.md', writeFile(responses));
     console.log(responses.title)
}

//Create a function to write README file
function writeFile(responses){ 
return `# ${responses.title}
## Table of Contents: 
[Project Description](#Project-Description)  
[Installation](#Installation)  
[Usage Information](#Usage-Information)  
[Contribution Guidelines](#Contribution-Guidelines)  
[Test Instructions](#Test-Instructions)  
[Licensing](#Licensing)  
[Questions and Contact Information](#Questions-and-Contact-Information)  

## Project Description 
${responses.description}

## Installation 
${responses.install}

## Usage Information 
${responses.usage}

## Contribution Guidelines 
${responses.contribution}

## Test Instructions 
${responses.test}

### Licensing 
${responses.license}

### Questions and Contact Information 
Github: ${responses.gitLink}  
Github username: ${responses.gitUser}   
Email address: ${responses.email}  
Any Questions should be directed to me using the above contact information.`
}



// function to initialize app
function init() {
    getUserInput();
}

// Function call to initialize app
init();