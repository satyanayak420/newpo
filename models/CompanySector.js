const mongoose = require("mongoose");

const companySectorSchema = new mongoose.Schema({
  companyCode: [{ type: String, required: true }],
  sectorCode: { type: String, required: true },
  sectorName: { type: String, required: true },
});

const CompanySector = mongoose.model("CompanySector", companySectorSchema);

module.exports = CompanySector;
