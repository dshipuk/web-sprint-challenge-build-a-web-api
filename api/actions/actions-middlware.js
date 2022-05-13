// add middlewares here related to actions
function validateGetId(req, res, next) {
    next()
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