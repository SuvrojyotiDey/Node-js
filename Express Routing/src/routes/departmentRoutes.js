import { Router } from "express";
import { createDeptCtrl } from "../controllers/departmentController/createDepartmentCtrl.js";
import { deleteDeptCtrl } from "../controllers/departmentController/deleteDepartmentCtrl.js";
import { getAllDeptCtrl } from "../controllers/departmentController/getAllDepartmentCtrl.js";
import { getDeptByIdCtrl } from "../controllers/departmentController/getDepartmentByIdCtrl.js";
import { updateDeptCtrl } from "../controllers/departmentController/updateDepartmentCtrl.js";

const deptRouter = Router();

deptRouter.post("/createDept", createDeptCtrl);
deptRouter.delete("/deleteDept/:id", deleteDeptCtrl);
deptRouter.get("/getAllDept", getAllDeptCtrl);
deptRouter.get("/getDeptById/:id", getDeptByIdCtrl);
deptRouter.put("/updateDept/:id", updateDeptCtrl);

export default deptRouter;
