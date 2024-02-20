const { Contribution } = require("../Database/models/Contributions");
const { sendMail } = require("./mail/sendMail");

const contribution = async (req, res) => {
  try {
    const { name, title, description, topic } = req.body.contributor;

    const data = await Contribution.create({
      name,
      title,
      description,
      topic,
    });

    await sendMail(name, title, description, topic);

    if (data) {
      res.status(200).send("Contribution added");
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { contribution };
