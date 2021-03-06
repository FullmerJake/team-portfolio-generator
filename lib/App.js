
// Imports the classes created for each type of employee for use within app logic
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

// Node Modules that allows for file movement and creation, as well as user input and feedback. 
const fs = require('fs');
const inquirer = require('inquirer');

// App Object
class App {
    // Creates an App object that holds an array of the different employees, as well as the answers the user inputted. 
    constructor() {

        this.employees = [],

        this.employeePrompt = [
            {
                type: 'input',
                message: "What is the employee's name?",
                name: 'name'
            },
            {
                type: 'input',
                message: "What is the employee's id?",
                name: 'id'
            },
            {
                type: 'input',
                message: "What is the employee's email?",
                name: 'email'
            }
        ];

        this.managerPrompt = this.employeePrompt.concat([
            {
                type: 'input',
                message: "What is the manager's office number?",
                name: 'officeNumber'
            }
        ]);

        this.engineerPrompt = this.employeePrompt.concat([
            {
                type: 'input',
                message: "What is the engineer's github?",
                name: 'github'
            }
        ]);

        this.internPrompt = this.employeePrompt.concat([
            {
                type: 'input',
                message: "What is the intern's school?",
                name: 'school'
            }
        ]);
    }

    // Starts application
    start(){
        this.nextEmmployee();
    };

    // Ends application
    end(){
        console.log('Team Profile Generated!');
    };

    // Proceeds to give user options to continue or end the application
    nextEmmployee(){
        this.promptRole().then((role) => {
            if (role === 'Exit') {
                this.renderHTML();
                this.end();
            }
            else {
                this.promptInfo(role).then((data) => {
                    switch(role) {
                        case 'Manager':
                            this.employees.push(new Manager(data.name, data.id, data.email, data.officeNumber));
                            break;
                        case 'Engineer':
                            this.employees.push(new Engineer(data.name, data.id, data.email, data.github));
                            break;
                        case 'Intern':
                            this.employees.push(new Intern(data.name, data.id, data.email, data.school));
                            break;
                    }
                    this.nextEmmployee();
                });
            }
        });
    };

    // Determines which questions to ask user
    promptRole(){
        return inquirer.prompt([
            {
                type: 'list',
                message: "Please enter the roll you'd like to enter",
                name: 'role',
                choices: ['Manager', 'Engineer', 'Intern', 'Exit']
            }
        ]).then(function(data){
            return (data.role);
        }).catch(function(error){
            console.log(error);
        })
    };

    // Retrieves info based on Role selected
    promptInfo(role){
        switch (role) {
            case 'Manager':
                return inquirer.prompt(this.managerPrompt).then(function (data){
                    return data;
                });
            case 'Engineer':
                return inquirer.prompt(this.engineerPrompt).then(function (data){
                    return data;
                });
            case 'Intern':
                return inquirer.prompt(this.internPrompt).then(function (data) {
                    return data;
                });
        }
    };

    // Reads/Writes/Copies and creates a new HTML file
    renderHTML(){
        fs.readFile('./src/main.html', 'utf8', (err, htmlString) => {
            htmlString = htmlString.split('<script></script>').join(this.getScript());

            fs.writeFile('./dist/index.html', htmlString, (err) => {
                if (err) throw err;
                console.log('HTML Generated!');
            });
        });
    };

    // Inserts data into an HTML template to then push into the main HTML code.
    getScript(){
        var scripts = ``;
        this.employees.forEach(employee => {
            var field = "";
            var iconClass = "";
            switch (employee.getRole()) {
                case "Manager":
                    field = `Office: ${employee.getOfficeNumber()}`;
                    iconClass = `users`;
                    break;
                case "Engineer":
                    field = `Github: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
                    iconClass = `cogs`;
                    break;
                case "Intern":
                    field = `School: ${employee.getSchool()}`;
                    iconClass = `user-graduate`;
                    break;
            }


            var cardScript = `
            <script>
            var col = $('<div class="col-4">');
            var card = $('<div class="card mx-auto border-info mb-3" style="max-width: 18rem;">');
            var header1 = $('<div class="card-header text-center h4">');
            header1.text("${employee.getName()}");
            var header2 = $('<div class="card-header text-center">');
            var icon = $('<i class="fas fa-${iconClass}">');
            header2.text(" ${employee.getRole()}");
            header2.prepend(icon);
            var cardBody = $('<div class="card-body text-info">');
            var cardTitle = $('<h5 class="card-title">');
            cardTitle.text("Employee Information:");
            var cardText = $('<p class="card-text">');
            cardText.text("ID: ${employee.getId()}");
            var cardText2 = $('<p class="card-text">');
            cardText2.html('Email: <a href="mailto: ${employee.getEmail()}" target="_blank">${employee.getEmail()}</a>');
            var cardText3 = $('<p class="card-text">');
            cardText3.html('${field}');
            cardBody.append(cardTitle);
            cardBody.append(cardText);
            cardBody.append(cardText2);
            cardBody.append(cardText3);
    
            card.append(header1);
            card.append(header2);
            card.append(cardBody);
            col.append(card);
            $("#cards").append(col);    
            </script>    
            `;
            scripts += cardScript;
        });

        return scripts;
    };

}

module.exports = App;