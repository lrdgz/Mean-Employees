const express = require("express");
const router = express.Router();

const Controller = require('../controllers/employee.controller');

router.get('/', Controller.getEmployees);
router.get('/:id', Controller.getEmployee);
router.post('/', Controller.createEmployees);
router.put('/', Controller.updateEmployees);
router.delete('/', Controller.deleteEmployees);

//ESPORT ROUTES
module.exports = router;