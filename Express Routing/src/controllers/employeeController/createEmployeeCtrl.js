import { StatusCodes } from "http-status-codes";
import { v4 as uuidv4 } from "uuid";
import { empData } from "../../data/empData.js";
import names from "random-names-generator";
import constants from "../../common/constants.js";

export const createEmpCtrl = (req, res) => {
  try {
    empData.push({
      id: empData.length + 1,
      empName: names.random(),
      userSecretKey: uuidv4(),
    });
    res.status(StatusCodes.CREATED);
    res.send({ message: "emp created successfully", data: empData });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send({ message: constants.SOMETHING_WENT_WRONG, error: err });
  }
};
