//import manager
const Manager = require('../lib/Manager');

describe("Manager", () =>{
const addedManager = {
    name: 'Jared',
    id: 004,
    email: 'jaredsr@gmail.com',
    github: 'www.github.com',
};

//constructor tests
describe('constructor test', () =>{
    test('new set of manager class', () =>{
        const manager = new Manager(addedManager);
        expect(manager).toBeInstanceOf(Manager);
    });
    test('expect new set of manager class w/ name id and email', () => {
        const manager = new Manager(addedManager);
        expect(manager).toEqual({
     name: 'Jared',
     id: 004,
     email: 'jaredsr@gmail.com',
     github: 'www.github.com',
     role: 'Eimanager',
    });
   })
  });

//method tests
//test name
describe('method tests', () =>{
    test('expect name with getName method', () =>{
        const manager = new Manager(addedmanager);
        expect(manager.getName()).toEqual('Jared');
    });


//test ID
describe('method tests', () =>{
test('expect id with getid method', () =>{
    const manager = new Manager(addedManager);
    expect(manager.getid()).toEqual(004);
});

//test email
describe('method tests', () =>{
    test('expect email with getEmail method', () =>{
        const manager = new Manager(addedManager);
        expect(manager.getEmail()).toEqual('jaredsr@gmail.com');
  });
  // github test
  test("expect github url", () =>{
    const manager = new Manager(addedManager);
    expect(manager.  ()).toEqual('   ');
  })
 });
});