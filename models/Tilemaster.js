const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const tileMasterSchema = new Schema({
  tileId: { type: String },
  category: { type: String },
  subcategory: { type: String },
  adminId: { type: String },
  itAdminId: { type: String },
  isSF_RBP_controlled: { type: Boolean },
  isDynamic: { type: Boolean },
  forcedEmployee: [{ type: String }],
  restrictedUsers: [{ employeeId: String }],
  restrictedGrades: [{ type: String }],
  groupCompanyDetails: [
    { type: mongoose.Schema.Types.ObjectId, ref: "GroupCompany" },
  ],
  url: { type: String },
});
const Tilemaster = mongoose.model("Tilemaster", tileMasterSchema);
module.exports = Tilemaster;
