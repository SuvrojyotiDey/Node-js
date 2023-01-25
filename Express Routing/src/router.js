import express from "express";
import userRouter from "./routes/userRoutes.js";
import { addTraceId } from "./middlewares/addtraceId.js";
import { routeNotFoundHandler } from "./middlewares/routeNotFoundHandler.js";
import deptRouter from "./routes/departmentRoutes.js";
import empRouter from "./routes/employeeRoute.js";

const roles = express();

roles.use(addTraceId);
roles.all("/", (req, res) => {
  res.send({ message: "This is an express based routing example." });
});
roles.use("/user", userRouter);
roles.use("/dept", deptRouter);
roles.use("/emp", empRouter);
// it will checks if it doesnot match with the current routes then the not found handler will run
roles.use(routeNotFoundHandler);

export default roles;
