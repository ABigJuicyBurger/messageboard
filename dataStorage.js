import fs from "fs";
import path from "path";
import { messageData } from "./messageData.js";

const dataFilePath = path.join(process.cwd(), "messages.json");

function loadMessages() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const data = fs.readFileSync(dataFilePath, "utf-8");
      const messages = JSON.parse(data);

      messages.forEach((msg) => {
        msg.added = new Date(msg.added);
      });

      return messages;
    }
  } catch (error) {
    console.error("error loading messages,", error);
  }

  return messageData;
}

function saveMessages() {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(messages, null, 2));
  } catch (err) {
    console.error("error saving", err);
  }
}

export const messages = loadMessages();

export function saveMessagesToFile() {
  saveMessages();
}
