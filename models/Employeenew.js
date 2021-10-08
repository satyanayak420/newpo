var mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailId: { type: String, required: true, unique: true },
  dateOfBirth: { type: String, required: true },
  dateOfJoining: { type: String, required: true },
  emp_PA: { type: Number, required: true },
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
});

const domainSchema = new mongoose.Schema({
  domainName: { type: String },
  domainCode: { type: Number },
});
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;

const companyDetailsSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  companyCode: { type: String, required: true },
  sectors: [sectorSchema],
  locationId: String,
  locationName: String,
});

const sectorSchema = new mongoose.Schema({
  sectorName: { type: String, required: true },
  sectorCode: { type: Number, required: true },
  businessgroup: [businessGroupSchema],
});
const divisionSchema = new mongoose.Schema({
  divisionName: { type: String, required: true },
  divisionId: { type: Number, required: true },
  subdivision: { type: String },
  departments: [departmentSchema],
});

const departmentSchema = new mongoose.Schema({
  departmentName: { type: String, required: true },
  departmentCode: { type: Number, required: true },
  subDepartmentName: { type: String },
  personnelArea: [personnelAreaSchema],
});
const personnelAreaSchema = new mongoose.Schema({
  personnelAreaId: String,
  personnelAreaName: String,
});

const businessGroupSchema = new mongoose.Schema({
  businessUnitName: { type: String, required: true },
  businessUnitcode: { type: Number, required: true },
  businessFunctionName: { type: Number, required: true },
  divisions: [divisionSchema],
});

const Company = mongoose.model("Company", companyDetailsSchema);

module.exports = Company;
