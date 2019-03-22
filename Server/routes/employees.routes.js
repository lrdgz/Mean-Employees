const express = require("express");
const router = express.Router();

const Controller = require('../controllers/employee.controller');

router.get('/', Controller.getEmployees);
router.get('/:id', Controller.getEmployee);
router.post('/:id', Controller.createEmployees);
router.put('/:id', Controller.updateEmployees);
router.delete('/:id', Controller.deleteEmployees);

//ESPORT ROUTES
module.exports = router;