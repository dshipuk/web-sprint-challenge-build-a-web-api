// add middlewares here related to projects
const Project = require("./projects-model");

async function validateGetId(req, res, next) {
    try {
        const data = await Project.get(req.params.id)
        
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
    const { name, description } = req.body;
    console.log(name, description)
    if (!name || !description) {
        res.status(400).json()
    } else {
        next()
    }
}


module.exports = {
    validatePostBody,
    validateGetId
}