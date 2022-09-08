//import eintern
const Intern = require('../lib/Intern');

describe("Intern", () =>{
const addedIntern = {
    name: 'Alec',
    id: 002,
    email: 'a1@gmail.com',
    github: 'www.github.com',
};

//constructor tests
describe('constructor test', () =>{
    test('new set of eintern class', () =>{
        const eintern = new Eintern(addedEintern);
        expect(eintern).toBeInstanceOf(Eintern);
    });
    test('expect new set of eintern class w/ name id and email', () => {
        const eintern = new Eintern(addedEintern);
        expect(eintern).toEqual({
     name: 'Alec',
     id: 002,
     email: 'a1@gmail.com',
     github: 'www.github.com',
     role: 'Eintern',
    });
   })
  });

//method tests
//test name
describe('method tests', () =>{
    test('expect name with getName method', () =>{
        const eintern = new Eintern(addedEintern);
        expect(eintern.getName()).toEqual('Alec');
    });


//test ID
describe('method tests', () =>{
test('expect id with getid method', () =>{
    const eintern = new Eintern(addedEintern);
    expect(eintern.getid()).toEqual(002);
});

//test email
describe('method tests', () =>{
    test('expect email with getEmail method', () =>{
        const eintern = new Eintern(addedEintern);
        expect(eintern.getEmail()).toEqual('a1@gmail.com');
  });
  // github test
  test("expect github url", () =>{
    const eintern = new Eintern(addedEintern);
    expect(eintern.  ()).toEqual('   ');
  })
 });
});