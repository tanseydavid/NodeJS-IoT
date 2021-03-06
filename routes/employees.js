const express = require('express');
const router = express.Router();
const tools = require('../tools');
const Employees = require('../models/EmployeesModel');

router.get('/', async function(req, res, next) {
    try {
        let employees = await Employees.getAll();
        employees.forEach( (employee) => {
            employee.href = tools.hrefForEmployeeNumber( req, employee.employeeNumber );
            employee.hrefReportsTo = tools.hrefForEmployeeNumber( req, employee.reportsTo );
            employee.hrefOffice = tools.hrefForOfficeCode( req, employee.officeCode );
        });
        debugger;
        res.render('employees', { title: 'Employees', rows: employees });
    } catch(err) {
        res.write("An error occurred: " + err );
        res.end();
        throw err;
    }
});

router.get('/:employeeNumber', async function(req, res, next) {
    let employeeNumber = req.params.employeeNumber;
    try {
        let employee = await Employees.getByEmployeeNumber(employeeNumber);
        employee.href = tools.hrefForEmployeeNumber( req, employee.employeeNumber );
        employee.hrefOffice = tools.hrefForOfficeCode( req, employee.officeCode );
        employee.hrefReportsTo = tools.hrefForEmployeeNumber( req, employee.reportsTo );
        let title = employee.lastName + ", " + employee.firstName;
        debugger;
        res.render('employee', { title: title, employee: employee });
        } catch(err) {
        res.write("An error occurred: " + err );
        res.end();
        throw err;
    }
});

module.exports = router;