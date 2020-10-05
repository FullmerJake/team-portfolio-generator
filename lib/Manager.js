const Employee = require('./Employee');

class Manager extends Employee {

    // Properties of Manager Class
    constructor(name, id, email, officeNumber) {

        super(name, id, email);
        super.role = 'Manager';

        this.officeNumber = officeNumber
    };

    // Methods of Manager Class
    getOfficeNumber() {
        return this.officeNumber;
    };
}

module.exports = Manager;