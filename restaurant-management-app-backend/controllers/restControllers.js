const { find } = require("../models/restaurant");
const restModel = require("../models/restmodel");
const Rest = require("../models/restmodel");

/*
const createRest = async (req, res) => {
  /* if (
    !req.body.name &&
    !req.body.cuisine &&
    !req.body.location &&
    !req.body.image
  ) {
    res.status(400).send({ message: "Enter all fields" });
  }
*/
/*
  if (!req.body.name) {
    res.status(400).send({ message: "Enter Restaurant name" });
  } else if (!req.body.cuisine) {
    res.status(400).send({ message: "Enter Cuisine" });
  } else if (!req.body.location) {
    res.status(400).send({ message: "Enter Location" });
  } else if (!req.body.image) {
    res.status(400).send({ message: "Enter Image" });
  }

  const rest = new restModel({
    name: req.body.name,
    cuisine: req.body.cuisine,
    location: req.body.location,
    image: req.body.image,
  });

  await rest
    .save()
    .then((data) => {
      res.send({
        message: "Restaurant Successfully Registered",
        rest: data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Error occured while creating a restaurant",
      });
    });
};
*/
const createRest = async (req, res) => {
  try {
    const { name, cuisine, location } = req.body;

    if (!name) {
      return res.status(400).send({ message: "Enter Restaurant name" });
    }

    if (!cuisine) {
      return res.status(400).send({ message: "Enter Cuisine" });
    }

    if (!location) {
      return res.status(400).send({ message: "Enter Location" });
    }

    const rest = new restModel({
      name,
      cuisine,
      location,
      image: req.file ? req.file.path : null, // Assuming file is uploaded using multer and stored at req.file.path
    });

    const savedRest = await rest.save();

    res.status(201).send({
      message: "Restaurant Successfully Registered",
      rest: savedRest,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error occurred while creating a restaurant",
    });
  }
};

const allRests = async (req, res) => {
  try {
    const rest = await restModel.find();
    res.status(200).json(rest);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createRest,
  allRests,
};
