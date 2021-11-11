const express = require('express');
const router = express.Router();
const controller = require('../controllers/serieController');

router.get("/", controller.getSerie);
router.get("/:id", controller.getSerieById);

router.post("/create", controller.createSerie);

router.patch("/update/:id", controller.updateSerie);

router.delete("/delete/:id", controller.deleteSerie);

module.exports = router