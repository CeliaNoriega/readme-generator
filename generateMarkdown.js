// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n${data.description} \n #Installation \n${data.installation} \n #Usage ${data.usage}\n #${data.license}\n#Contributing\n ${data.contributing}\n #Tests\n${data.tests}\n#Questions?\n${data.questions} \n# ${data.github} \n# ${data.email}`
;
}

module.exports = generateMarkdown;
