const express = require('express');
const server = express();

const projectsRouter = require("./projects/projects-router");

// Configure your server here
server.use(express.json());


// Build your actions router in /api/actions/actions-router.js


// Build your projects router in /api/projects/projects-router.js
server.use("/api/projects", projectsRouter);



// Handling if No Route Provided
server.use("*", (res, req) => {
    res.statusCode(404).json({
        message: "Not Found"
    })
})


// Do NOT `server.listen()` inside this file!
module.exports = server;
