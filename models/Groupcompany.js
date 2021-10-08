const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const groupCompanySchema = new Schema({
  companyCode: { type: String },
  companyName: { type: String },
  persaCode: { type: String },
  persaText: { type: String },
  employeeGroup: [{ type: String }],
  employeeGrade: [{ type: String }],
},
{
  versionKey:false
}
);
const GroupCompany = mongoose.model("GroupCompany", groupCompanySchema,"GroupCompany");
module.exports = GroupCompany;
