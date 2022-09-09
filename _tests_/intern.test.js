//import intern
const Intern = require('../lib/Intern');

describe("Intern", () =>{
const addedIntern = {
    name: 'John',
    id: 003,
    email: 'johndoe1@gmail.com',
    github: 'www.github.com',
};

//constructor tests
describe('constructor test', () =>{
    test('new set of intern class', () =>{
        const intern = new Intern(addedIntern);
        expect(intern).toBeInstanceOf(Intern);
    });
    test('expect new set of intern class w/ name id and email', () => {
        const intern = new Intern(addedIntern);
        expect(intern).toEqual({
     name: 'John',
     id: 003,
     email: 'johndoe1@gmail.com',
     github: 'www.github.com',
     role: 'Eintern',
    });
   })
  });

//method tests
//test name
describe('method tests', () =>{
    test('expect name with getName method', () =>{
        const intern = new Intern(addedintern);
        expect(intern.getName()).toEqual('John');
    });


//test ID
describe('method tests', () =>{
test('expect id with getid method', () =>{
    const intern = new Intern(addedIntern);
    expect(intern.getid()).toEqual(003);
});

//test email
describe('method tests', () =>{
    test('expect email with getEmail method', () =>{
        const intern = new Intern(addedIntern);
        expect(intern.getEmail()).toEqual('johndoe1@gmail.com');
  });
  // github test
  test("expect github url", () =>{
    const intern = new Intern(addedIntern);
    expect(intern.  ()).toEqual('   ');
  })
 });
});