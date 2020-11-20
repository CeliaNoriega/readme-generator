// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${data.description}

${data.installation} 

# Usage 
   ${data.usage}

# ${data.license}

# Contributing:
   ${data.contributing}

# Tests:
   ${data.tests}
  
# Questions?
    ${data.questions} 
    
${data.github} 
${data.email}`
}

module.exports = generateMarkdown;
