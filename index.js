const inquirer = require('inquirer');
const romanToInt = require('./romannumeral');

const prompts = [
    {
       'name': 'userInput',
       'type': 'input',
       'message': 'Please enter a roman numeral to convert to an integer' 
    }
]

const init = () => {
    inquirer
    .prompt(prompts)
    .then(answers => {
        console.log(romanToInt(answers.userInput))
    })
}

init();