import express from "express";
import newMessageRoute from "./routes/newMessageRoute.js";
import messageRoute from "./routes/messagesRoute.js";
import path from "path";
import { messages } from "./dataStorage.js";

const app = express();
const port = 8000;

const __dirname = import.meta.dirname;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Mini MessageBoard",
    messages: messages,
  });
});

app.use("/new", newMessageRoute);

app.use("/message", messageRoute);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
