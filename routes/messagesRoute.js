import express from "express";
import * as messageController from "../controller/messageController.js";

const router = express.Router();

router.get("/:user/:text", messageController.fetchSingleMessage);

export default router;
