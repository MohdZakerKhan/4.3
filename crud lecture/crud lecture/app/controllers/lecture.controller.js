// Import the necessary modules and the lecture model from the models directory
const db = require("../models");
const lecture = db.lectures;

// Create and Save a new lecture
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    // If title is not provided, send a 400 Bad Request response
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a lecture object with the provided data
  const lecture = new lecture({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save the lecture in the database
  lecture
    .save(lecture)
    .then(data => {
      // Send the saved data as the response
      res.send(data);
    })
    .catch(err => {
      // Handle errors and send a 500 Internal Server Error response
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the lecture."
      });
    });
};

// Retrieve all lectures from the database.
exports.findAll = (req, res) => {
  // Extract the 'title' query parameter from the request
  const title = req.query.title;
  // Define a condition based on the presence of the 'title' parameter
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  // Find lectures based on the condition
  lecture.find(condition)
    .then(data => {
      // Send the retrieved data as the response
      res.send(data);
    })
    .catch(err => {
      // Handle errors and send a 500 Internal Server Error response
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving lectures."
      });
    });
};

// Find a single lecture with an id
exports.findOne = (req, res) => {
  // Extract the 'id' parameter from the request
  const id = req.params.id;

  // Find a lecture by its id
  lecture.findById(id)
    .then(data => {
      // Check if the lecture was found and send the response accordingly
      if (!data)
        res.status(404).send({ message: "Not found lecture with id " + id });
      else res.send(data);
    })
    .catch(err => {
      // Handle errors and send a 500 Internal Server Error response
      res
        .status(500)
        .send({ message: "Error retrieving lecture with id=" + id });
    });
};

// Update a lecture by the id in the request
exports.update = (req, res) => {
  // Check if the request body is empty
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  // Extract the 'id' parameter from the request
  const id = req.params.id;

  // Update the lecture by its id
  lecture.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      // Check if the lecture was found and send the response accordingly
      if (!data) {
        res.status(404).send({
          message: `Cannot update lecture with id=${id}. Maybe lecture was not found!`
        });
      } else res.send({ message: "lecture was updated successfully." });
    })
    .catch(err => {
      // Handle errors and send a 500 Internal Server Error response
      res.status(500).send({
        message: "Error updating lecture with id=" + id
      });
    });
};

// Delete a lecture with the specified id in the request
exports.delete = (req, res) => {
  // Extract the 'id' parameter from the request
  const id = req.params.id;

  // Delete the lecture by its id
  lecture.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      // Check if the lecture was found and send the response accordingly
      if (!data) {
        res.status(404).send({
          message: `Cannot delete lecture with id=${id}. Maybe lecture was not found!`
        });
      } else {
        res.send({
          message: "lecture was deleted successfully!"
        });
      }
    })
    .catch(err => {
      // Handle errors and send a 500 Internal Server Error response
      res.status(500).send({
        message: "Could not delete lecture with id=" + id
      });
    });
};

// Delete all lectures from the database.
exports.deleteAll = (req, res) => {
  // Delete all lectures
  lecture.deleteMany({})
    .then(data => {
      // Send a response indicating the number of deleted lectures
      res.send({
        message: `${data.deletedCount} lectures were deleted successfully!`
      });
    })
    .catch(err => {
      // Handle errors and send a 500 Internal Server Error response
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all lectures."
      });
    });
};

// Find all published lectures
exports.findAllPublished = (req, res) => {
  // Find lectures with the 'published' field set to true
  lecture.find({ published: true })
    .then(data => {
      // Send the retrieved data as the response
      res.send(data);
    })
    .catch(err => {
      // Handle errors and send a 500 Internal Server Error response
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving lectures."
      });
    });
};
