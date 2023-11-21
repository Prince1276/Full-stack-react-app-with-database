const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    providerName: {
      type: String,
      required: true,
      unique: true,
    },
    product: "array",
    // productVariation: "array",
  },
  { timestamps: true }
);

const energyprovider = mongoose.model("energyprovider", userSchema);

module.exports = energyprovider;
