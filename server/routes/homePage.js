const router = require("express").Router();

router.get('/', (req, res) => {
    res.status(200).send("server up and running, homepage");
});

module.exports = router;