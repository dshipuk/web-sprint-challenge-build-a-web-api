// Write your "actions" router here!
const express = require("express");
const Action = require("./actions-model");

const router = express.Router();

router.get("/", (req, res) => {
    Action.get()
        .then( result => {
            res.json(result)
        })
})

module.exports = router;
