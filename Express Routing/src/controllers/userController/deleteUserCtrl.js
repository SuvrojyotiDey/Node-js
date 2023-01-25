import { StatusCodes } from "http-status-codes";
import { userData } from "../../data/userData.js";
import { validateDataPresence } from "../../utils/validateDataPresence.js";
import constants from "../../common/constants.js";
export const deleteUserCtrl = (req, res) => {
  try {
    const { id } = req.params;
    // check if id exists
    if (validateDataPresence(userData, id).length > 0) {
      const users = userData.filter((user) => {
        return user.id !== parseInt(id);
      });
      // unloading the data of the userData
      userData.length = 0;
      // destructuring the new data into the old emptied array
      userData.push(...users);
      res.status(StatusCodes.OK);
      res.send({ message: `User ${id} deleted`, data: userData });
    } else {
      res.status(StatusCodes.BAD_REQUEST);
      res.send({ message: `User ${id} not Found`, data: userData });
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send({ message: constants.SOMETHING_WENT_WRONG, error: err });
  }
};
