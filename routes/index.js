const express = require("express");
const {createAccount,addFonds, bsOrder} = require("../controllers");

const router = express.Router();

router.post("/account/", createAccount);
router.post("/account/:id/order", bsOrder);
router.put("/account/", addFonds);

module.exports = {
    router
}