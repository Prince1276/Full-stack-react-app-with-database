const express = require("express");
const router = express.Router();

const bp = require("../models/bp.model");

router.get("/getAllBPDetails", (req, res) => {
  bp.find()
    .then((provider) => {
      res.status(200).json(provider);
    })
    .catch((err) => {
      res.status(500).json({ message: `General failure - ${err}` });
    });
});

router.get("/getPerticularBPDetail/:broadband/:product", (req, res) => {
  const { broadband, product } = req.params;
  bp.find({ providerName: broadband }).then((ress) => {
    for (let i = 0; i < ress[0].product.length; i++) {
      if (ress[0].product[i].productType === product) {
        console.log(ress[0].product[i].price);
        res.status(200).json({ price: ress[0].product[i].price });
        break;
      } else if (i + 1 === ress[0].product.length) {
        res
          .status(400)
          .json({ message: `Requestd provider or product not available` });
      }
    }
  });
});

module.exports = router;
