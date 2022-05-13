// Write your "projects" router here!
const express = require("express");
const Project = require("./projects-model");

const router = express.Router();

router.get("/", (req, res) => {
    Project.get()
        .then( result => {
            res.json(result)
        })
})

router.get("/:id", (req, res) => {
    Project.get(req.params.id)
        .then( result => {
            result ? res.json(result) : res.status(404).json({ message: "No Id" }) 
        })
        .catch( () => {
            res.status(500).json({ message: "Server Error" })
        })
})

router.post("/", (req, res) => {
    Project.insert(req.body)
        .then( result => {
            result.name.trim() && result.description.trim() && res.status(201).json(result);
        })
        .catch( () => {
            res.status(400).json({ message: "Please include name and description" })
        })
})

router.put("/:id", (req, res) => {
    Project.update(req.params.id, req.body)
        .then( result => {
            const { name, description, completed } = req.body
            
            name && description && completed != undefined
            ? res.status(201).json(result)
            : res.status(400).json()
        })
        .catch( () => {
            res.status(400).json()
        })
})

router.delete("/:id", (req, res) => {
    Project.remove(req.params.id)
        .then( result => {
            result
            ? res.json()
            : res.status(404).json()
        })
        .catch( () => res.status(404).json())
})

router.get("/:id/actions", (req, res) => {
    Project.getProjectActions(req.params.id)
        .then( result => {
            res.json(result)
        })
})


module.exports = router;