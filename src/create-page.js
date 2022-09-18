const fs = require('fs');
const path = require ('path')
// push to html
const renderHTML = employees => {
    const html = [];
//filter manager
    html.push(...employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
      );
      //filter engineer
     html.push(...employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
      );
      //filter inter
     html.push(...employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
      );
      return renderMain(html.join(""));
  
    };
  