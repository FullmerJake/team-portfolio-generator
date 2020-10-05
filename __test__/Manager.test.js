
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');


// All the tests ran to make sure Manager Class works. First parameter of test displays what each test does. 


test('Can set office # via constructor', () => {
    const testOffice = 'A50';
    const employee = new Manager('Jack', 'E3', 'email@email.com', testOffice);
    expect(employee.officeNumber).toBe(testOffice);
});

test('getRole() should return Manager', () => {
    const testManager = 'Manager';
    const employee = new Manager('Jack', 'E3', 'email@email.com', 'A50');
    expect(employee.getRole()).toBe(testManager);
});

test('getOffice() returns the office number', () => {
    const testOfficeNumber = 'A50';
    const employee = new Manager('Jack', 'E3', 'email@email.com', testOfficeNumber);
    expect(employee.getOfficeNumber()).toBe(testOfficeNumber);
});