const { Concept } = require("../Database/models/Concept");

const createConcept = async (req, res) => {
  try {
    const { title, description, tag } = req.body;

    const newConcept = await Concept.create({
      title,
      description,
      tag,
    });

    if (newConcept) {
      res.status(200).json(newConcept);
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { createConcept };
