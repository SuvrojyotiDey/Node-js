import { StatusCodes } from "http-status-codes";
import { empData } from "../../data/empData.js";
import { validateDataPresence } from "../../utils/validateDataPresence.js";
import constants from "../../common/constants.js";

export const getEmpByIdCtrl = (req, res) => {
  try {
    const { id } = req.params;
    const empDetails = validateDataPresence(empData, id);
    // check if id exists
    if (empDetails.length > 0) {
      res.status(StatusCodes.ACCEPTED);
      res.send({ message: `${id} found`, data: empDetails });
    }
    // if id is not present
    else {
      res.status(StatusCodes.BAD_REQUEST);
      res.send({ message: `Emp ${id} not Found`, data: empData });
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send({ message: constants.SOMETHING_WENT_WRONG, error: err });
  }
};
