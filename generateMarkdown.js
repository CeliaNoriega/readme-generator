// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n${data.description} \n #Installation \n${data.installation} \n #Usage ${usage}\n #Contributing\n ${contributing}\n #Tests\n${tests}\n#Questions?\n${questions} \n# ${data.github} \n# ${data.email}`
;
}

module.exports = generateMarkdown;
