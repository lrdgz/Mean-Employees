const employeeCrtl = {};
const Model = require('../models/employee');

//GET ALL EMPLOYEEES
employeeCrtl.getEmployees = async (req, res) => {
    const employees = await Model.find();
    res.json(employees);
};

//GET ONE EMPLOYEEE
employeeCrtl.getEmployee = async (req, res) => {
    const employee = await Model.findById(req.params.id);
    res.json(employee);
};

//ADD EMPLOYEEE
employeeCrtl.createEmployees = async (req, res) => {
    const employee = new Model(req.body);
    await employee.save();
    res.json({ status: 'Employee Saved' });
};

//UPDATE EMPLOYEEE
employeeCrtl.updateEmployees = async (req, res) => {
    const { id } = req.params;
    const employee = {
        name: req.params.name,
        position: req.params.position,
        office: req.params.office,
        salary: req.params.salary,
    };

    await Model.findByIdAndUpdate(id, { $set: employee }, { new: true });
    res.json({ status: 'Employee Updated' });

};

//DELETE EMPLOYEEE
employeeCrtl.deleteEmployees = async (req, res) => {
    await Model.findByIdAndRemove(req.params.id, req.body);
    res.json({ status: 'Employee Deleted' });
};

module.exports = employeeCrtl;