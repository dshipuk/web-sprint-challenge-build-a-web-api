// Write your "actions" router here!
const express = require("express");
const Action = require("./actions-model");
///const Project = require("../projects/projects-model")
const { validatePostBody } = require("./actions-middlware");

const router = express.Router();

router.get("/", (req, res) => {
    Action.get()
        .then( result => {
            res.json(result)
        })
})

router.get("/:id", (req, res) => {
    Action.get(req.params.id)
        .then( result => {
            result
            ? res.json(result)
            : res.status(404).json()
        })
        .catch( () => res.status(404).json())
})

router.post("/", validatePostBody, (req, res, next) => {
    Action.insert(req.body)
        .then( result => {
            res.status(201).json(result)
        })
        .catch(next)
})

router.put("/:id", (req, res) => {
    Action.update(req.params.id, req.body)
        .then( result => {
            const { notes, description, project_id } = req.body
            
            notes && description && project_id
            ? res.status(201).json(result)
            : res.status(400).json()
        })
        .catch( () => {
            res.status(400).json()
        })
})

router.delete("/:id", (req,res) => {
    Action.remove(req.params.id)
        .then( result => {
            result
            ? res.json()
            : res.status(404).json()
        })
        .catch( () => res.status(404).json())
})

module.exports = router;


            // Project.get(result.project_id)
            //     .then( project => {
            //         project 
            //         ? res.json(result)
            //         : res.status(404).json()
            //     })