const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
};

// Create a Tutorial
const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
};

// Save Tutorial in the database
Tutorial.create(tutorial)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Tutorial."});
});



// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Tutorial.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
});
        });
};

// Find a single Tutorial with an id
exports.update = (req, res) =>{    
};

// Update a tutorial by the id in the request
exports.update = (req, res) => {
};

// Delete a tutorial with the specified id in the request
exports.delete = (req, res) => {
};

// Delete all tutorials from the database
exports.deleteAll = (req, res) => {
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
};