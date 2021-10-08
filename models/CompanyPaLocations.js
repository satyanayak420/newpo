const mongoose = require("mongoose");

const companyPaLocationSchema = new mongoose.Schema({
  personnelArea: { type: String, required: true },
  psaCode: { type: String, required: true },
  psaDescription: { type: String, required: true },
  location: { type: String, required: true },
});

const CompanyPaLocation = mongoose.model(
  "CompanyPaLocation",
  companyPaLocationSchema
);

module.exports = CompanyPaLocation;
