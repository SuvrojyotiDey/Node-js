import { Router } from "express";
import { createUserCtrl } from "../controllers/userController/createUserCtrl.js";
import { deleteUserCtrl } from "../controllers/userController/deleteUserCtrl.js";
import { getAllUserCtrl } from "../controllers/userController/getAllUserCtrl.js";
import { getUserByIdCtrl } from "../controllers/userController/getUserByIdCtrl.js";
import { updateUserCtrl } from "../controllers/userController/updateUserCtrl.js";

const userRouter = Router();

userRouter.post("/createUser", createUserCtrl);
userRouter.delete("/deleteUser/:id", deleteUserCtrl);
userRouter.get("/getAllUser", getAllUserCtrl);
userRouter.get("/getUserById/:id", getUserByIdCtrl);
userRouter.put("/updateUser/:id", updateUserCtrl);

export default userRouter;
