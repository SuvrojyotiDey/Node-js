import { StatusCodes } from "http-status-codes";
import { userData } from "../../data/userData.js";
import names from "random-names-generator";
import { validateDataPresence } from "../../utils/validateDataPresence.js";
import constants from "../../common/constants.js";

export const updateUserCtrl = (req, res) => {
  try {
    const { id } = req.params;
    // check if id exists
    if (validateDataPresence(userData, id).length > 0) {
      const userDetails = userData.map((user) => {
        if (user.id === parseInt(id)) {
          user.firstName = names.random();
        }
        return user;
      });
      userData.length = 0;
      userData.push(...userDetails);
      res.status(StatusCodes.OK);
      res.send({ message: "user updated", data: userData });
    } else {
      res.status(StatusCodes.BAD_REQUEST);
      res.send({ message: `User ${id} not Found`, data: userData });
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send({ message: constants.SOMETHING_WENT_WRONG, error: err });
  }
};
