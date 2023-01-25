import { StatusCodes } from "http-status-codes";
import { deptData } from "../../data/deptData.js";
import { validateDataPresence } from "../../utils/validateDataPresence.js";
import constants from "../../common/constants.js";

export const getDeptByIdCtrl = (req, res) => {
  try {
    const { id } = req.params;
    const deptDetails = validateDataPresence(deptData, id);
    // check if id exists
    if (deptDetails.length > 0) {
      res.status(StatusCodes.ACCEPTED);
      res.send({ message: `${id} found`, data: deptDetails });
    }
    // if id is not present
    else {
      res.status(StatusCodes.BAD_REQUEST);
      res.send({ message: `Dept ${id} not Found`, data: deptData });
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send({ message: constants.SOMETHING_WENT_WRONG, error: err });
  }
};
