import { StatusCodes } from "http-status-codes";
import { userData } from "../../data/userData.js";
import constants from "../../common/constants.js";

export const getAllUserCtrl = (req, res) => {
  try {
    res.status(StatusCodes.OK);
    res.send({ message: "All Users Data", data: userData });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send({ message: constants.SOMETHING_WENT_WRONG, error: err });
  }
};
