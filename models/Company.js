var mongoose = require("mongoose");

const companyDetailsSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    companyCode: { type: String, required: true },
    // sectors: [sectorSchema],
    // locationId: String,
    // locationDescription: String,
  }
  // {
  //   timestamps: true,
  // }
);

const Company = mongoose.model("Company", companyDetailsSchema);

module.exports = Company;
