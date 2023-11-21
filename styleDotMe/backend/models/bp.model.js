const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bpSchema = new Schema(
  {
    providerName: "string",
    product: [{ productType: "string", price: "number" }],
  },
  { timestamps: true }
);

const broadbandProvider = mongoose.model("BroadbandProvider", bpSchema);

module.exports = broadbandProvider;
