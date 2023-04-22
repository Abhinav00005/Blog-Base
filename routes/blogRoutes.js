// If we take a look at this app.js file at the minute it's getting quite long there's a lot of code
// in it and is looking a bit messy and hard to maintain and update, so what we're gonna do now
// is explore a couple of things the Express router and also MVC to neaten this over maybe
// split our code into different files so first of all the Express router is something
// we can use to manage all of our routes more efficiently and more tightly so it makes the app more
// modular and it also becomes easier to update those different parts of the app later on and
// it will mean that we don't have to have everything justified in one big messy file

const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();
const blogController = require("../controllers/blogController");

// instead of app.get we are gonna use router.get so we can export it to our app.js

router.get("/create", blogController.blog_create_get);
router.get("/", blogController.blog_index);
router.post("/", blogController.blog_create_post);
router.get("/:id", blogController.blog_details);
router.delete("/:id", blogController.blog_delete);

module.exports = router;