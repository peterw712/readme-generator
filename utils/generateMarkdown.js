 //renders license badges
const renderLicenseBadge = license => {
    let licenseBadge = ''
    switch (license) {
      case 'MIT':
        licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        break;
      case 'Apache License 2.0':
        licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        break;
      case 'Eclipse Public License 1.0':
        licenseBadge = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
        break;
      case 'Mozilla Public License 2.0':
        licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        break;
      case 'No License':
        licenseBadge = ``
        break;
    }
    return licenseBadge
  }

// function to generate markdown for README
const generateMarkdown = (data) => {
const badge = renderLicenseBadge(data.license);
return `# Title 
${data.title}
## Description
${data.description}
## Badges
${badge}
## Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)
## Installation 
${data.install}
## Usage  
${data.usage}
## Tests  
${data.test}
## Contributing 
${data.contributing}
## License  
${data.license}
## Questions  
GitHub: [${data.username}](https://github.com/${data.username})
Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;

