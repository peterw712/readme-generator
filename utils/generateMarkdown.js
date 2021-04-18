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
        licenseBadge = ''
        break;
    }
    return licenseBadge
  }