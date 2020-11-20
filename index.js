const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown')
const path = require('path')

// array of questions for user
const questions = [
  { type: 'input',
    name: 'title',
    message: 'What is the Title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Give a description for your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide Instructions for installation:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please include a how-to for your project:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please include any contributors to this project:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please include instructions to test your project:'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'GNU General Public License v.3.0'],
  }
]

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(),fileName), data
)
}

// function to initialize program
function init() {
inquirer.prompt(questions).then(function(inquirerResponses){
  writeToFile('README.md', generateMarkdown({...inquirerResponses}))
})
}

// function call to initialize program
init();
