// add middlewares here related to actions
const Action = require("./actions-model")

async function validateGetId(req, res, next) {
    try {
        const data = await Action.get(req.params.id)
        if (data) {
            req.data = data
            next()
        } else {
            res.status(404).json()
        }
    } catch (err) {
        res.status(500).json()
    }
}

function validatePostBody(req, res, next) {
    const { notes, description, project_id } = req.body;

    if (!notes || !notes.trim() || !description || !description.trim() || !project_id) {
        res.status(400).json()
    } else {
        next()
    }
}

module.exports = {
    validateGetId,
    validatePostBody
}