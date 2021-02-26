# README-Gen
Quickly and easily create a high-quality README file by using command-line application

License badges from [lukas-h](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

## Description
This application asks a series of questions of the user and generates a README file based upon those inputs. It uses javascript and node.js (with the inquirer and filesystem modules) to create command line prompts to fill in the Description, Installation, Usage, License, Contributing, Tests, and Question sections of a README file. This file is named after the user's project title and is generated with a Table of Contents towards the top. The user has the option to choose from some of the most common open source license types and have a badge and link generated automatically. They can also choose "other" if they wish to use a different license type.

## Installation
Requires node.js to run index.js in the command line. Also will require running npm install to get the inquirer module found within the package.json file. 

## Usage
Start by type 'node index.js' in the command line. Answer the prompts given and at the end the system will confirm the program was created by saying "Successfully created \<filename>.md" You should have generated a new README file with the project title as its filename. If there is an error, run the application again with the same filename and the application will override the previous version. 
<!-- Enter video/screenshots here -->

## Contributions

