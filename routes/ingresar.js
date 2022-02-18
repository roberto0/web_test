const express = require("express");
const router = express.Router();

router.get('/ingresar', (req,res) => {
    res.render('ingresar');
});
router.get('/ingresar.html', (req,res) => {
    res.render('ingresar');
});

module.exports = router;