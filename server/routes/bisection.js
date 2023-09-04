const express = require("express")
const router = express.Router()
const {create} = require("../controllers/bisectionController")

router.post('/bi',create)

module.exports = router 