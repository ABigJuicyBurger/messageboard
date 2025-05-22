import { messages, saveMessagesToFile } from "../dataStorage.js";
const submitMessage = async (req, res) => {
  return res.render("pages/form", {
    title: "Send a message into the void...",
  });
};

const getMessageData = async (req, res) => {
  try {
    console.log(req.body);
    const messagePayload = req.body;
    messages.push({
      text: messagePayload.messageText,
      user: messagePayload.messageUser,
      added: new Date(),
    });

    saveMessagesToFile();

    res.redirect("/");
  } catch (err) {
    console.log(err);
    return;
  }
};

export { submitMessage, getMessageData };
