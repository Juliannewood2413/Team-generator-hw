
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}
/* 
obj = {
    name: "wh",
    id: "wh",
    fwedfaw
}
*/
module.exports = Employee
// TODO: Write code to define and export the Employee class
// const inquirer = require('inquirer');
// const render = require("./lib/htmlRenderer");
// const util = require('util');
// const fs = require("fs");

// const writeToFile = util.promisify(fs.writeFile);


// const employPrompt = () =>
// inquirer.prompt([
//     {
//         type: 'input',
//         name: 'employName',
//         message: "What is the employee's name?"
//     },
//     {
//         type: 'input',
//         name: 'employID',
//         message: "What is the employee's ID?"
//     },
//     {
//         type: 'input',
//         name: 'employEmail',
//         message: "What is the employees's email?"
//     },
//     {
//         type: 'input',
//         name: 'employPhone',
//         message: "What is the employee's office number?"
//     },
// ]); 



// employPrompt()
// .then((answers) => writeToFile('manager.html', render(answers)))
// .then(() => console.log('Successfully wrote to manager file'))
// .catch((err) => console.error(err));

// exports.employPrompt = employPrompt;


