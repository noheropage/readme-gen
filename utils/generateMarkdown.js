const inputs = require('../index')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    default:
      return '';
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

    case 'GPL':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    default:
      return '';
    case 'MIT':
      return `https://opensource.org/licenses/MIT`
    case 'GPL':
      return `https://www.gnu.org/licenses/gpl-3.0`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    default:
      return '';
    case 'MIT':
      return `## License ${renderLicenseBadge(license)}
          ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Discription
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
    Please reach out to me through github (${data.username}) or email (${data.email}) with any questions

  ${renderLicenseSection(data.license)}
    `;
}


module.exports = generateMarkdown;
