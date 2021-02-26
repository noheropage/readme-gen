// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    default:
      return '';
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'GPL':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'BSD':
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    case 'LGPL':
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
    case 'AGPL':
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    case 'Other':
      return ''
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    default:
      return '';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'GPL':
      return `https://www.gnu.org/licenses/gpl-3.0`;
    case 'Apache':
      return `https://opensource.org/licenses/Apache-2.0`;
    case 'BSD':
      return `https://opensource.org/licenses/BSD-3-Clause`;
    case 'LGPL':
      return `https://www.gnu.org/licenses/lgpl-3.0`;
    case 'AGPL':
      return `https://www.gnu.org/licenses/agpl-3.0`;
    case 'Other':
      return 'Please update this section with information about your preferred license';
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (!license ? '' : `## License
  This application is covered under the [${license} license](${renderLicenseLink(license)})`)
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title.toUpperCase()}
  ${renderLicenseBadge(data.license)}
  ### Table of Contents
  [Discription](#description)

  [Installation](#installation)

  [Usage](#usage)

  [Contributing](#contributing)

  [Testing](#testing)

  [Questions](#questions)

  [License](#license)

  ## Description
    ${data.description}

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## Contributing
    ${data.contributing}

  ## Testing
    ${data.tests}

  ## Questions
  Don't hesitate to reach out!

  GitHub: [${data.username}](https://github.com/${data.username}) 

  Email: <mailto:${data.email}> 

  ${renderLicenseSection(data.license)}
    `;
}

module.exports = generateMarkdown;
