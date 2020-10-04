const Employee = require('../lib/Employee');

test("Create an instance of Employee", () => {
    const employee = new Employee('Jake', '3', 'email@email.com');
    expect(typeof(employee)).toBe('object');
});

test('getName() returns a name', () => {

    const testName = 'Jack';
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);

});

test('getId() returns an id', () => {

    const testId = '10';
    const employee = new Employee(testId);
    expect(employee.getId()).toBe('Jack', testId);

});

test('getEmail() returns an email', () => {

    const testEmail = 'email@email.com';
    const employee = new Employee('Jack', 'E3', testEmail);
    expect(employee.getEmail()).toBe(testEmail);

});

test('getRole() returns the employee role', () => {

    const testRole = 'Janitor';
    const employee = new Employee('Jack', 'E3', 'email@email.com');
    expect(employee.getName()).toBe(testName);

});
