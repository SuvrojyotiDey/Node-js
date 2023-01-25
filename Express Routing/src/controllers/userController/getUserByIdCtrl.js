import { StatusCodes } from "http-status-codes";
import { userData } from "../../data/userData.js";
import { validateDataPresence } from "../../utils/validateDataPresence.js";
import constants from "../../common/constants.js";

export const getUserByIdCtrl = (req, res) => {
  try {
    const { id } = req.params;
    const userDetails = validateDataPresence(userData, id);
    // check if id exists
    if (userDetails.length > 0) {
      res.status(StatusCodes.ACCEPTED);
      res.send({ message: `${id} found`, data: userDetails });
    }
    // if id is not present
    else {
      res.status(StatusCodes.BAD_REQUEST);
      res.send({ message: `User ${id} not Found`, data: userData });
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send({ message: constants.SOMETHING_WENT_WRONG, error: err });
  }
};
