// Exporting a function that sets up the lecture routes for the app
module.exports = app => {
  // Importing the lecture controller
  const lecture = require("../controllers/lecture.controller.js");

  // Creating an Express Router instance
  var router = require("express").Router();

  // Creating a new lecture - POST request to "/"
  router.post("/", lecture.create);

  // Retrieving all lectures - GET request to "/"
  router.get("/", lecture.findAll);

  // Retrieving all published lectures - GET request to "/published"
  router.get("/published", lecture.findAllPublished);

  // Retrieving a single lecture by id - GET request to "/:id"
  router.get("/:id", lecture.findOne);

  // Updating a lecture by id - PUT request to "/:id"
  router.put("/:id", lecture.update);

  // Deleting a lecture by id - DELETE request to "/:id"
  router.delete("/:id", lecture.delete);

  // Using the lecture routes under the "/api/lecture" endpoint
  app.use("/api/lecture", router);
};
