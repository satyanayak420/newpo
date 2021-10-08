var mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String },
  name: { type: String, required: true },
  emp_PA: { type: Number, required: true },
  psa: { type: Number, required: true },
  roleName: [{ type: String, required: true }],
  is_Manager: { type: Boolean, required: true },
  reportsTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
  is_BHR: { type: Boolean },

  department: {
    type: {
      departmentName: { type: String, required: true },
      division: { type: String, required: true },
      subDivision: { type: String, required: true },
      function: { type: String, required: true },
    },
  },
});

// mangaer 1---employees
// employee 2
// employee 3
// {
//     manager:1
// }

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
