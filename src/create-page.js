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
      