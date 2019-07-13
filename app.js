const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

app.get("/", (req, res) => res.render());
