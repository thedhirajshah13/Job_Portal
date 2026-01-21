import express from "express";
import { logIn, logOut, signUp } from "../controller/user.controller.js";
import { authMiddelware } from "../middelware/auth.middelware.js";
const authRouter=express.Router();

authRouter.post('/signup',signUp);
authRouter.post('/login',logIn);
authRouter.post('/logout',authMiddelware,logOut);

export default authRouter