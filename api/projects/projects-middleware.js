// add middlewares here related to projects

function validatePostBody(req, res, next) {
    const { name, description } = req.body;
    console.log(name, description)
    if (!name || !description) {
        res.status(400).json()
    } else {
        next()
    }
}


module.exports = {
    validatePostBody
}