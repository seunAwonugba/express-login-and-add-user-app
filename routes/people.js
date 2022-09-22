const express = require("express");
const peopleRouter = express.Router();
const { getPeople, createPerson } = require("../controllers/people");

//for "api/v1/people" "/" now becones the base url in the
peopleRouter.get("/", getPeople);

peopleRouter.post("/", createPerson);

module.exports = { peopleRouter };
