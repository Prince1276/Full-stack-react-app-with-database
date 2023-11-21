const express = require("express");
const app = express();
const { users, ROLES } = require("./data");
const { authUser, authRole } = require("./basicAuth");
const projectRouter = require("./routers/projects");

app.use(express.json());
app.use(setUser);
app.use("/projects", projectRouter);

app.get("/", (req, res) => {
  res.send("Home Page.");
});

app.get("/dashboard", authUser, (req, res) => {
  res.send("Dashboard");
});

app.get("/admin", authUser, authRole(ROLES.ADMIN), (req, res) => {
  res.send("Admin page");
});

function setUser(req, res, next) {
  const userId = req.body.userId;
  if (userId) {
    req.user = users.find((user) => user.id === userId);
    console.log("users ", req.user);
  }
  next();
}

app.listen(3500, () => {
  console.log("server is listening at port 3500...");
});
