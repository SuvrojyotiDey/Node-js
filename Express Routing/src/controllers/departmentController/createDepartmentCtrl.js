import { StatusCodes } from "http-status-codes";
import { v4 as uuidv4 } from "uuid";
import { deptData } from "../../data/deptData.js";
import names from "random-names-generator";
import constants from "../../common/constants.js";

export const createDeptCtrl = (req, res) => {
  try {
    deptData.push({
      id: deptData.length + 1,
      deptName: names.random(),
      userSecretKey: uuidv4(),
    });
    res.status(StatusCodes.CREATED);
    res.send({ message: "dept created successfully", data: deptData });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send({ message: constants.SOMETHING_WENT_WRONG, error: err });
  }
};
