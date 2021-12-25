/* --------------------------------------------------
SETUP
-------------------------------------------------- */

const helper = require('./Helper');
const configuration = require('./configuration.json');
const express = require('express');
const router = express.Router();
module.exports = router;

/* --------------------------------------------------
ROUTES
-------------------------------------------------- */

router.get("/v1/data", (req, res) => {
    res.send(configuration);
});

router.post("/v1/data", (req, res) => {
    res.send(helper.getRows(req.body));
});