// generatemarkdown function to create the README.md
function generatemarkdown(answers) {
    return `
${answers.projectTitle} 
  

## Description
📙 ${answers.description}

## Table of Contents
- [Description] (#description)
- [Installation] (#installation)
- [Usage] (#usage)
- [License] (#license)
- [Contributing] (#contributing)
- [Tests] (#tests)
- [Questions] (#questions)

## Installation
⚙️ ${answers.installation}

## Usage
💻 ${answers.usage}

## License

This application is covered by the ${answers.license} license. 

## Contributing
👪 ${answers.contributing}

## Tests
📝 ${answers.tests}

## Questions
🤔 ${answers.questions}

Find me on GitHub: [${answers.username}](https://github.com/${answers.username})


✉️ Email me with any questions: ${answers.email}

_This README was generated by [README-generator](https://github.com/Misachka/README-generator) 
    `;
  }
  
module.exports = generatemarkdown; 
