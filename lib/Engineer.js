const Employee = require('./Employee');

class Engineer extends Employee {
    // Properties of Engineer Class
    constructor(name, id, email, github){

        super(name, id, email);
        super.role = 'Engineer';

        this.github = github;
    };

    // Methods of Engineer Class
    getGithub() {
        return this.github;
    };
}


module.exports = Engineer;