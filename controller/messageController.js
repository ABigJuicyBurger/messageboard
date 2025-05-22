import { messages } from "../dataStorage.js";

const fetchSingleMessage = async (req, res) => {
  const { user, text } = req.params;

  const message = messages.find(
    (msg) => msg.user === user && msg.text === text
  );

  if (message) {
    res.render("pages/message", {
      title: "Message from " + user,
      message: message,
    });
  } else {
    console.log(req.params);

    res.status(404).send("Message not found");
  }
};

export { fetchSingleMessage };
