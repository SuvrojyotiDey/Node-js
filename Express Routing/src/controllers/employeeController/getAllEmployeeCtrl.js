import { StatusCodes } from "http-status-codes";
import { empData } from "../../data/empData.js";
import constants from "../../common/constants.js";

export const getAllEmpCtrl = (req, res) => {
  try {
    res.status(StatusCodes.OK);
    res.send({ message: "All Emp Data", data: empData });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send({ message: constants.SOMETHING_WENT_WRONG, error: err });
  }
};
