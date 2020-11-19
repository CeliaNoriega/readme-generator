// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n# ${data.github} \n# ${data.email}`
;
}

module.exports = generateMarkdown;
