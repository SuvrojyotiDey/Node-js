import { StatusCodes } from "http-status-codes";
import { deptData } from "../../data/deptData.js";
import constants from "../../common/constants.js";

export const getAllDeptCtrl = (req, res) => {
  try {
    res.status(StatusCodes.OK);
    res.send({ message: "All Dept Data", data: deptData });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send({ message: constants.SOMETHING_WENT_WRONG, error: err });
  }
};
