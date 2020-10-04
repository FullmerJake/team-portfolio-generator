const { tsThisType, exportAllDeclaration } = require('@babel/types');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('Can set office # via constructor', () => {
    const testOffice = 'A50';
    const employee = new Employee('Jack', 'E3', 'email@email.com', testOffice);
    expect(employee.officeNumber).toBe(testOffice);
});

test('getRole() should return Manager', () => {
    const testManager = 'Manager';
    const employee = new Employee('Jack', 'E3', 'email@email.com', 'A50');
    expect(e.getRole()).toBe(testManager);
});

test('getOffice() returns the office number', () => {
    const testOfficeNumber = 'A50';
    const employee = new Employee('Jack', 'E3', 'email@email.com', testOfficeNumber);
    expect(employee.getOfficeNumber()).toBe(testOfficeNumber);
});