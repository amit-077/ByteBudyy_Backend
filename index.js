const express = require("express");
const { User } = require("./Database/models/User");
const { connectDB } = require("./Database/connectDatabase/connectDB");
const registerUser = require("./controllers/register");
const loginUser = require("./controllers/loginUser");
const dotenv = require("dotenv");
const { updateTopics } = require("./controllers/ChooseTopics");
const { authenticateUser } = require("./middleware/authenticateUser");
const { createConcept } = require("./controllers/createConcept");
const { Concept } = require("./Database/models/Concept");
const { getFeed } = require("./controllers/getFeed");
const { saveItem } = require("./controllers/saveItem");
const { getSavedItems } = require("./controllers/getSavedItems");
const { getAllSaved } = require("./controllers/getAllSaved");
const { contribution } = require("./controllers/contribute");
const { Contribution } = require("./Database/models/Contributions");
const { addQuestion } = require("./controllers/addQuestion");
const { getAllQuestions } = require("./controllers/getAllQuestions");
const { Question } = require("./Database/models/Questions");
const { googleSignUp } = require("./controllers/googleSignUp");
const { googleLogin } = require("./controllers/googleLogin");
const { clearCache } = require("./controllers/clearCache");
const {
  addQuizQuestion,
} = require("./controllers/QuizQuestions/addQuizQuestion");
const { Quiz } = require("./Database/models/Quiz");

const app = express();
dotenv.config();

connectDB();

app.use(express.json());

// post requests

app.post("/register", registerUser);
app.post("/login", loginUser);
app.post("/updateTopics", authenticateUser, updateTopics);
app.post("/createConcept", createConcept);
app.post("/saveItem", authenticateUser, saveItem);
app.post("/contribute", contribution);
app.post("/addQuestion", addQuestion);
app.post("/googleSignUp", googleSignUp);
app.post("/googleLogin", googleLogin);
app.post("/addQuizQuestion", addQuizQuestion);

//get requests
app.get("/getFeed", authenticateUser, getFeed);
app.get("/getSavedItems", authenticateUser, getSavedItems);
app.get("/getAllSaved", authenticateUser, getAllSaved);
app.get("/getAllQuestions", getAllQuestions);
app.get("/clearCache", clearCache);
// testing
app.get("/", (req, res) => {
  res.send("CoderBytes is working");
});

app.get("/getAllUsers", async (req, res) => {
  const data = await User.find();
  res.send(data);
});

app.get("/getUser", authenticateUser, async (req, res) => {
  const user = req.user;
  const data = await User.find({ _id: user }).select("feed");
  res.status(200).send(data);
});

app.get("/getAllConcepts", async (req, res) => {
  const data = await Concept.find();
  res.send(data);
});

app.get("/getAllContri", async (req, res) => {
  const data = await Contribution.find();
  res.send(data);
});

app.get("/", (req, res) => {
  res.status(200).send("Server working");
});

app.get("/deleteUser/:id", async (req, res) => {
  let { id } = req.params;
  const deletedUser = await User.deleteOne({ _id: id });
  if (deletedUser) {
    res.send("User deleted");
  }
});

app.get("/deleteAllUsers", async (req, res) => {
  await User.deleteMany();
  res.send("All users deleted");
});

app.get("/deleteAllConcepts", async (req, res) => {
  await Concept.deleteMany();
  res.send("All concepts deleted");
});

app.get("/getAllQuizQuestions", async (req, res) => {
  let data = await Quiz.find();
  res.status(200).send(data);
});

app.get("/deleteAllQuestions", async (req, res) => {
  await Question.deleteMany();
  res.status(200).send("All Questions deleted");
});

app.get("/deleteAllQuizQuestions", async (req, res) => {
  await Quiz.deleteMany();
  res.status(200).send("All Questions deleted");
});

//listening
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
