
const { exportAllDeclaration } = require('@babel/types');
const Intern = require('../lib/Intern');


// All the tests ran to make sure Intern Class works. First parameter of test displays what each test does. 

test('Can set school via constructor', () => {
    const testSchool = 'UVU';
    const employee = new Intern('Jack', 'E3', 'email@email', testSchool);
    expect(employee.getSchool()).toBe(testSchool);
});

test('getRole() should return Intern', () => {
    const testRole = 'Intern';
    const employee = new Intern('Jack', 'E3', 'email', 'UVU');
    expect(employee.getRole()).toBe(testRole);
});

test('can access user inputed school through getSchool()', () => {
    const testSchool = 'UVU';
    const employee = new Intern('Jack', 'E3', 'email', testSchool);
    expect(employee.getSchool()).toBe(testSchool);
});