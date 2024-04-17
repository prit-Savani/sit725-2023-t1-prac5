var express = require("express");
let router = express.Router();
let controller = require("../Controller/contorller");

router.get("/projects", (req, res) => {
  controller.getAllCards(req, res);
  console.log("in the rout api projects ");
});
router.post("/cards", (req, res) => {
  controller.postcards(req, res);
  console.log("in the rout api cards ");
});

module.exports = router;
