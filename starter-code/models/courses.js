const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const CoursesSchema =  new Schema({
  name: String,
  startingDate: Date,
  endDate: Date,
  level: String,
  available: Boolean
  }, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Courses = mongoose.model("Courses", userSchema);

module.exports = User;
