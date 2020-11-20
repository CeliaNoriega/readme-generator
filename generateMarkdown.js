//create variable for badges
let licenseBadge = ''
// function to generate markdown for README
function generateMarkdown(data) {
  //licenseBadge function to display correct badge
  if (data.license === 'MIT License') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (data.license === 'Apache License 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (data.license === 'Mozilla Public License 2.0') {
    licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else {
    licenseBadge ='[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
//template for README
  return `# ${data.title} 
  ${data.description}

${data.installation} 

## Table of Contents
  * [Usage](#usage)
  * [License](#license:)
  * [Contributing](#contributing:)
  * [Tests](#tests:)
  * [Questions](#questions?)

## Usage 

    ${data.usage}

## License:
### ${data.license}
${licenseBadge}

## Contributing:
  
    ${data.contributing}

## Tests:
   ${data.tests}
  
## Questions?
    
    Check out other projects I have worked on here: ${data.github}
    Email me with any questions regarding this project at: ${data.email}`
}

module.exports = generateMarkdown;
