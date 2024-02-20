const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  sendMail: true,
  service: "gmail",
  auth: {
    user: "ben10realfan@gmail.com",
    pass: "ytsvkjlogcnnvahf",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(name, title, description, topic) {
  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"ByteBuddy" <bytebuddy@gmail.com>', // sender address
      to: "amitkamat918@gmail.com", // list of receivers
      subject: "New contribution", // Subject line
      text: "", // plain text body
      html: `<html><body><p>Hey Amit, there's a new contribution on ByteBuddy.<br><br>
        
      Name: ${name}<br><br>
      Title : ${title}<br><br>
      Description: ${description}<br><br>
      Topic : ${topic}<br><br>
      <br>
      <br>
        </p></body></html>`, // html body
    });

    console.log(info);
  } catch (e) {
    console.log(e);
  }
}

module.exports = { sendMail };
