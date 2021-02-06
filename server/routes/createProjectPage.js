const router = require("express").Router();

router.get('/newproject', (req, res) => {
    res.status(200).send("create new project here");
});

module.exports = router;