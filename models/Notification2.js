const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const notificationSchema = new Schema(
  {
    employeeId: { type: String, required: true },
    pernr: { type: String },
    activityType: String,
    activity: String,
    identifier: String,
    workflowId: String,
    status: String,
    viewUrl: String,
    approveUrl: String,
    rejectUrl: String,
    message: String,
    dueDate: String,
    isActionable: String,
    date: String,
    time: String,
  },
  { versionKey: false }
);
const Notification = mongoose.model("Notifications1", notificationSchema);
module.exports = Notification;
