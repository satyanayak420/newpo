const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const notificationSchema = new Schema({
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" }, // Notification creator
  receivers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }], // Ids of the receivers of the notification
  message: String,
  notificationType: {
    objectType: Number,
    objectId: Number,
  },

  status: String,
  messageType: String,
  isActionable: { type: Boolean },
  // // actionDate: { type: Date },redundant
  viewUrl: String,
  approveURL: String,
  rejectURL: String,
  // deviceSpecification: String, redundant
  read_at: { type: Date },
  created_at: { type: Date, default: Date.now },
});
const Notification = mongoose.model("Notifications1", notificationSchema);
module.exports = Notification;
