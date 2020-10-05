class Employee {
    // Properties of Employee Class
    constructor(name, id, email){
        this.name = name,
        this.id = id,
        this.email = email,
        this.role = "Employee"
    }

    // Methods in the Employee Class
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role;
    };
}

module.exports = Employee;