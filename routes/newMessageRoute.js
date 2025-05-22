import express from "express";
import * as newMessageController from "../controller/newMessageController.js";

const router = express.Router();

router.get("/", newMessageController.submitMessage);
router.post("/", newMessageController.getMessageData);

export default router;
