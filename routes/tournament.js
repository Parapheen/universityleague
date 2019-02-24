const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    const userId = req.session.userId;
    const userLogin = req.session.userLogin;

    res.render('tournament', {
        user: {
            id: userId,
            login: userLogin
        }
    });
});



module.exports = router;