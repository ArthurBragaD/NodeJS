const express = require("express")
const router = express.Router()
const { check } = require('express-validator')
var myController = require("../controllers/mycontroller")



router.get("/", myController.showForm)
// router.post("/", myController.save)
router.get("/show", myController.showForm)

// router.get("/delete/:id",myController.delete)
// router.get("/edit/:id",myController.edit)
// router.post("/edit/:id",myController.update)
router.get("/add", myController.formAdd)
router.post("/add", myController.addEmpregado)

module.exports = router 