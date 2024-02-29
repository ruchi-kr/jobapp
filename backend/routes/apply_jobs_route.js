const express = require("express")
const { applyJob } = require("../controllers/add_jobs_controllers")
const router = express.Router()
const upload = require('./multer')
const protectedResource = require("../middleware/protectedResource");

router.post('/',protectedResource,upload.single('resume'), applyJob)

module.exports = router