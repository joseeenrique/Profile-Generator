//import employee
const Employee = require('../lib/Employee');

describe("Employee", () =>{
const addedEmployee = {
    name: 'Tammer',
    id: 001,
    email: 'tammerjames@gmail.com',
};

//constructor tests
describe('constructor test', () =>{
    test('new set of employee class', () =>{
        const employee = new Employee(addedEmployee);
        expect(employee).toBeInstanceOf(Employee);
    });
    test('expect new set of employee class w/ name id and email', () => {
        const employee = new Employee(addedEmployee);
        expect(employee).toEqual({
     name: 'Tammer',
    id: 001,
    email: 'tammerjames@gmail.com',
    });
   })
  });

//method tests
describe('method tests', () =>{
test('expect id with getid method')



})







 });