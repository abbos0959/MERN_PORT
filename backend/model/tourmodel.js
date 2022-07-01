const mongoose = require("mongoose");
const TourModel = mongoose.Schema({
   title: String,
   description: String,
   name: String,
   creator: String,
   tags: [String],
   imageFile: String,
   createdAt: {
      type: Date,
      default: new Date(),
   },
   likeCount: {
      type: Number,
      default: 0,
   },
});

module.exports = mongoose.model("tour", TourModel);
