const express = requiere("express");
const router = express.Router();

const router = require("express").Router();

const mainController = require("../controller/mainController");

router.get("/",mainController.home);
router.get("/contacto",mainController.contacto)


module.exports = router;