const Employee = require('./Employee');

class Intern extends Employee {

    // Properties of Itern Class
    constructor(name, id, email, school){

        super(name, id, email);
        super.role = 'Intern';

        this.school = school
    };

    // Methods of Intern Class
    getSchool() {
        return this.school;
    };
}


module.exports = Intern;