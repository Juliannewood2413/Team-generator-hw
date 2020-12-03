const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const util = require('util');
const fs = require("fs");

const userChoice = ["Manager", "Engineer", "Intern", "I am good with this team"];
const basicQuestions = [
    {
        message: "What is your new employee Name?",
        name: "name"
    },
    {
        message: "What is your new employee ID?",
        name: "id"
    },
    {
        message: "What is your new employee Email?",
        name: "email"
    }
]
const employees = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const writeToFile = util.promisify(fs.writeFile);

const teamChoice = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'empType',
            message: 'Please choose which team member you would like to add.',
            choices: userChoice,
        }
    ]).then(resType => {
        if(resType.empType == "I am good with this team"){
            fs.writeFile(outputPath, render(employees), err =>{
                if(err) throw err;
            })
        }else{
            inquirer.prompt(basicQuestions)
                .then(resBasic => {
                    switch (resType.empType){
                        case 'Manager':
                            inquirer.prompt([
                                {
                                    message: "What is your Manager's office number?",
                                    name: "officeNumber"
                                }
                            ]).then(resMang => {
                                const manager = new Manager(resBasic.name, resBasic.id, resBasic.email, resMang.officeNumber);
                                employees.push(manager);
                                teamChoice();
                            })
                            break;
                        case 'Engineer':
                            inquirer.prompt([
                                {
                                    message: "What is the Engineer's Github username?",
                                    name: "github"
                                }
                            ]).then(resEng => {
                                const engineer = new Engineer(resBasic.name, resBasic.id, resBasic.email, resEng.gitHub);
                                employees.push(engineer);
                                teamChoice();
                            })
                            break;
                        case 'Intern':
                            internPrompt();
                            break;
                    }
                })
        }
    })
}
teamChoice();
    

   
         




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
