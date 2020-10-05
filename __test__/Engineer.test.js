const { exportAllDeclaration } = require('@babel/types');
const { TestResult } = require('@jest/types');
const Engineer = require('../lib/Engineer');

// All the tests ran to make sure Engineer Class works. First parameter of test displays what each test does. 


test('Sets Github account via constructor', () => {
    const testGithub = 'GitUser';
    const employee = new Engineer('Jack', 'E3', 'email', testGithub);
    expect(employee.github).toBe(testGithub);
});

test('getRole() should return Enginerr', () => {
    const testRole = 'Engineer';
    const employee = new Engineer('Jack', 'E3', 'email', 'Github');
    expect(employee.getRole()).toBe(testRole);
});

test('getGithub() returns the github username', () => {
    const testGithub = "GitUser";
    const employee = new Engineer('Jack', 'E3', 'email', testGithub);
    expect(employee.getGithub()).toBe(testGithub);
});