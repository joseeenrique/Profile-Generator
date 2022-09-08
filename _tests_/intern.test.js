//import engineer
const Engineer = require('../lib/Engineer');

describe("Engineer", () =>{
const addedEngineer = {
    name: 'Alec',
    id: 002,
    email: 'a1@gmail.com',
    github: 'www.github.com',
};

//constructor tests
describe('constructor test', () =>{
    test('new set of engineer class', () =>{
        const engineer = new Engineer(addedEngineer);
        expect(engineer).toBeInstanceOf(Engineer);
    });
    test('expect new set of engineer class w/ name id and email', () => {
        const engineer = new Engineer(addedEngineer);
        expect(engineer).toEqual({
     name: 'Alec',
     id: 002,
     email: 'a1@gmail.com',
     github: 'www.github.com',
     role: 'Engineer',
    });
   })
  });

//method tests
//test name
describe('method tests', () =>{
    test('expect name with getName method', () =>{
        const engineer = new Engineer(addedEngineer);
        expect(engineer.getName()).toEqual('Alec');
    });


//test ID
describe('method tests', () =>{
test('expect id with getid method', () =>{
    const engineer = new Engineer(addedEngineer);
    expect(engineer.getid()).toEqual(002);
});

//test email
describe('method tests', () =>{
    test('expect email with getEmail method', () =>{
        const engineer = new Engineer(addedEngineer);
        expect(engineer.getEmail()).toEqual('a1@gmail.com');
  });
  // github test
  test("expect github url", () =>{
    const engineer = new Engineer(addedEngineer);
    expect(engineer.  ()).toEqual('   ');
  })
 });
});