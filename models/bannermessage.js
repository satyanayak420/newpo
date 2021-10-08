const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const bannerSchema = new Schema({
  messageId: { type: String },
  messageText: { type: String },
  isShown: { type: Boolean },
  startDate: { type: Date },
  endDate: { type: Date },
});
const Banner = mongoose.model("Banner", bannerSchema);
module.exports = Banner;