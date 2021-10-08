var mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailId: { type: String, required: true, unique: true },
  dateOfBirth: { type: String, required: true },
  dateOfJoining: { type: String, required: true },
  employee_PA: {
    personnelAreaName: String,
    personnelAreaDescription: String,
    businessFunctionId: Number,
    businessFunctionName: String,
    required: true,
  },
  employeeType: { type: String, required: true },
  employeeTypeCode: { type: Number, required: true },
  employeeGrade: { type: String, required: true },
  employeeGradeCode: { type: Number, required: true },
  employeeStatus: { type: Boolean, required: true },
  employeeStatusCode: { type: Number, required: true },
  employeeLocation: {
    locationName: { type: String },
    locationCode: { type: Number },
  },
  organisationUnitCode: Number,
  organisationUnitName: { type: String },
  isPF_User: { type: Boolean, required: true },
  isMesopUser: { type: Boolean, required: true },
  isCS_User: { type: Boolean, required: true },
  isSA_User: { type: Boolean, required: true },
  bHR: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  position: { type: String, required: true },
  separationDate: { type: String, required: true },
  gender: { type: String, required: true },
  psa: { type: Number, required: true },
  roleName: [{ type: String, required: true }],
  is_Manager: { type: Boolean, required: true },
  managerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
  is_BHR: { type: Boolean },
  domain: [domainSchema],
  company: {
    companyCode: { type: Number },
    companyName: { type: String },
  },
  sector: {
    sectorCode: { type: Number },
    sectorName: { type: String },
  },
  businessUnit: {
    businessUnitName: String,
    businessUnitcode: Number,
  },
  division: {
    divisionName: String,
    divisionId: Number,
    subdivision: String,
  },
  department: {
    departmentCode: Number,
    departmentName: String,
    subdepartment: String,
  },
});

const domainSchema = new mongoose.Schema({
  domainName: { type: String },
  domainCode: { type: Number },
});
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
