const express = require("express");
const postmanRouter = express.Router();
const {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson,
} = require("../controllers/postman");

postmanRouter.get("/", getPeople);

postmanRouter.post("/", createPerson);

postmanRouter.put("/:id", updatePerson);

postmanRouter.delete("/:id", deletePerson);

module.exports = { postmanRouter };
