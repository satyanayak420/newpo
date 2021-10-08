const mongoose = require("mongoose");

const personnelAreaSchema = new mongoose.Schema({
  companyCode: { type: String, required: true },
  personnelArea: { type: String, required: true },
  personnelAreaDescription: { type: String, required: true },
});

const PersonnelArea = mongoose.model("PersonnelArea", personnelAreaSchema);

module.exports = PersonnelArea;
