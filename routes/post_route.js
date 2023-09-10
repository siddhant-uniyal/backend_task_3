

import express from "express"

import { makePost} from "../controllers/post_controller.js"

const router = express.Router();

router.post("/words/add" , makePost)

export default router;