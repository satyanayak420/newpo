var mongoose = require("mongoose");
const domainSchema = new mongoose.Schema({
  domainName: { type: String },
  domainCode: { type: Number },
});

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailId: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date },
  dateOfJoining: { type: Date },
  employee_PA: {
    type: Object,
    personnelAreaName: String,
    personnelAreaDescription: String,
    businessFunctionId: Number,
    businessFunctionName: String,
    // required: true,
  },
  employeeType: { type: String },
  employeeTypeCode: { type: Number },
  employeeGrade: { type: String },
  employeeGradeCode: { type: Number },
  employeeStatus: { type: Boolean },
  employeeStatusCode: { type: Number },
  employeeLocation: {
    locationName: { type: String },
    locationCode: { type: Number },
  },
  organisationUnitCode: Number,
  organisationUnitName: { type: String },
  isPF_User: { type: Boolean },
  isMesopUser: { type: Boolean },
  isCS_User: { type: Boolean },
  isSA_User: { type: Boolean },
  bHR: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  position: { type: String },
  separationDate: { type: String },
  gender: { type: String },
  psa: { type: Number },
  roleName: [{ type: String }],
  is_Manager: { type: Boolean },
  managerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
  is_BHR: { type: Boolean },
  domain: [domainSchema],
  company: {
    type: mongoose.Schema.Types.ObjectId,
  },
  sector: {
    type: mongoose.Schema.Types.ObjectId,
  },
  businessUnit: {
    type: mongoose.Schema.Types.ObjectId,
  },
  division: {
    type: mongoose.Schema.Types.ObjectId,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
