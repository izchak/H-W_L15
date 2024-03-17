const express = require("express");
const app = express();
const path = require("path");
const PORT = 5000;
const { addUser, getUserByUsername } = require("./modules/userModules");
const {
  addStudents,
  getStudets,
  removeStundent,
  updateStudent,
} = require("./modules/studentMudules");

const cors = require("cors");
const { log } = require("console");
app.use(
  cors({
    origin: `*`,
  })
);

// app.use(express.static("FRONTED"));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "login.html"));
// });

app.post("/api/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    await addUser(email, username, password);
    return res.send({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ success: false, message: error.message });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await getUserByUsername(username, password);
    return res.send({ success: true, user });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ success: false, message: error.message });
  }
});

app.get("/api/students", async (req, res) => {
  try {
    const students = await getStudets();
    return res.send({ success: true, students });
  } catch (error) {
    return res.status(400).send({ success: false, message: error.message });
  }
});

app.post("/api/insertStudents", async (req, res) => {
  try {
    const { name, age, major, university, averageGrade } = req.body;
    await addStudents(name, age, major, university, averageGrade);
    return res.send({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ success: false, message: error.message });
  }
});

app.post("/api/deleteUser", async (req, res) => {
  try {
    const id = req.body;
    await removeStundent(id);
    return res.send({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ success: false, message: error.message });
  }
});

app.post("/api/updateStudent", async (req, res) => {
  try {
    const { id, name, age, major, university, averageGrade } = req.body;
    await updateStudent(id, name, age, major, university, averageGrade);
    return res.send({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
