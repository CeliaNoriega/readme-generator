//create variable for badges
let licenseBadge = ''
// function to generate markdown for README
function generateMarkdown(data) {
  if (data.license === 'MIT License') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (data.license === 'Apache License 2.0') {
    licenseBadge = ''
  } else if (data.license === 'Mozilla Public License 2.0') {
    licenseBadge = ''
  } else {
    licenseBadge =''
  }

  return `# ${data.title} 
  ${data.description}

${data.installation} 

## Usage 
 ${data.usage}

### ${data.license}
${licenseBadge}

## Contributing:
   ${data.contributing}

## Tests:
   ${data.tests}
  
## Questions?
    ${data.questions} 
    
${data.github} 
${data.email}`
}

module.exports = generateMarkdown;
