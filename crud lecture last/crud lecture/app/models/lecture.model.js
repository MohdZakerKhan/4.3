// Exporting a function that takes the mongoose instance as an argument
module.exports = mongoose => {
  
  // Creating a Mongoose schema for the 'lecture' collection
  var schema = mongoose.Schema(
    {
      title: String,           // Title of the lecture (String type)
      description: String,     // Description of the lecture (String type)
      published: Boolean       // Boolean flag indicating if the lecture is published
    },
    { timestamps: true }      // Adding timestamps for 'createdAt' and 'updatedAt'
  );

  // Adding a custom method to the schema to modify the JSON representation
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;           // Adding 'id' field and assigning the '_id' value
    return object;
  });

  // Creating a Mongoose model named 'lecture' based on the defined schema
  const lecture = mongoose.model("lecture", schema);
  
  // Returning the 'lecture' model
  return lecture;
};
