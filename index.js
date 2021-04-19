//import packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//each prompt
const prompts = [
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: usernameInput => {
            if(usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: projectInput => {
            if(projectInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project',
        validate: projectInput => {
               if(projectInput) {
                  return true;
              } else {
                  console.log('Please enter a description of your project!');
                  return false;
              }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter instructions on how to install your project',
        validate: installInput => {
             if(installInput) {
                return true;
              } else {
                   console.log('Please enter instructions to install your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can your project be used?',
        validate: installInput => {
             if(installInput){
                return true;
              } else {
                   console.log('Please enter how your project can be used!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can someone contribute to your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can your project be tested?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license',
        choices: ['MIT', 'Apache License 2.0', 'Eclipse Public License 1.0', 'Mozilla Public License 2.0', 'No License']
    },
];

//function to write data to file
const writeToFile = (fileName, data)  => {
    //create README file
        fs.writeFile('./README.md', (fileName, data), err => {
        if (err) {
            return console.log(err);
          }
          console.log('File created!');
          });
        }

//function to initialize app
const initialize = () => {
    return inquirer.prompt(prompts)
}

initialize()

//generate data on promise resolution
.then(data => {
    return generateMarkdown(data);
})

//write data to file on promise resolution
.then(data => {
    return writeToFile('README.md', data)
})
  