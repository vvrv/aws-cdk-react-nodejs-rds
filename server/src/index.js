require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const userRoutes = require("./routes/users");

const app = express();
app.use(helmet());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
