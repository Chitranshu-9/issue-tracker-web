const router = require("express").Router();

router.get('/hs', (req, res) => {
    res.status(200).send("server up and running, issue creation");
});

module.exports = router;