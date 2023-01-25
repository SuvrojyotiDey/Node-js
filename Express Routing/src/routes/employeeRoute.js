import { Router } from "express";
import { createEmpCtrl } from "../controllers/employeeController/createEmployeeCtrl.js";
import { deleteEmpCtrl } from "../controllers/employeeController/deleteEmployeeCtrl.js";
import { getAllEmpCtrl } from "../controllers/employeeController/getAllEmployeeCtrl.js";
import { getEmpByIdCtrl } from "../controllers/employeeController/getEmployeeByIdCtrl.js";
import { updateEmpCtrl } from "../controllers/employeeController/updateEmployeeCtrl.js";

const empRouter = Router();

empRouter.post("/createEmp", createEmpCtrl);
empRouter.delete("/deleteEmp/:id", deleteEmpCtrl);
empRouter.get("/getAllEmp", getAllEmpCtrl);
empRouter.get("/getEmpById/:id", getEmpByIdCtrl);
empRouter.put("/updateEmp/:id", updateEmpCtrl);

export default empRouter;
