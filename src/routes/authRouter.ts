import express, { Router } from "express";
import { loginAuth } from "../auth/auth.controller";

const router: Router = express.Router();

router.post('/', loginAuth);

export default router;