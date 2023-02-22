const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/* Middleware */
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
const usersRoute = require("./routes/Users");

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API, this is test script ",
  });
});

app.use("/api/v1/users", usersRoute);

const port = 3000;

app.listen(port, () => {
  console.log("Listening on port: ", port);
});
