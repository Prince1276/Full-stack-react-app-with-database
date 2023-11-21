const express = require("express");
const { db } = require("../models/ep.model");
const router = express.Router();

const ep = require("../models/ep.model");

router.get("/getAllEPDetails", (req, res) => {
  ep.find()
    .then((provider) => {
      res.status(200).json(provider);
    })
    .catch((err) => {
      res.status(500).json({ message: `General failure - ${err}` });
    });
});

router.get(
  "/getPerticularEPDetails/:provider/:product/:variation",
  (req, res) => {
    const { provider, product, variation } = req.params;
    ep.find({ providerName: provider })
      .then((db) => {
        const productLength = db[0].product.length;
        for (let i = 0; i < productLength; i++) {
          for (let ij of db[0].product[i].productVariation) {
            if (
              db[0].product[i].productType === product &&
              ij.name === variation
            ) {
              res.status(200).json({ price: ij.price });
              break;
            } else if (
              i + 1 > productLength &&
              ij + 1 > db[0].product[i].productVariation.length
            ) {
              res.status(400).json({
                message: `Requestd provider or product not available`,
              });
            }
          }
        }
      })
      .catch((err) => {
        res.json({ message: `Error ${err}` });
        console.log(`Error --> ${err}`);
      });
  }
);

module.exports = router;
