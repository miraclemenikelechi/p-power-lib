const express = require("express");
const router = express.Router();
const Author = require("../models/author");

// all authors
router.get("/", (request, response) => {
    response.render("authors/index");
});

// new author
router.get("/new", (request, response) => {
    response.render("authors/new", { author: new Author() });
});

// create author
router.post("/", (request, response) => {
    response.send(request.body.name);
});

module.exports = router;