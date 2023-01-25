import { StatusCodes } from "http-status-codes";
import { v4 as uuidv4 } from "uuid";
import { userData } from "../../data/userData.js";
import names from "random-names-generator";
import constants from "../../common/constants.js";

export const createUserCtrl = (req, res) => {
  try {
    userData.push({
      id: userData.length + 1,
      firstName: names.random(),
      userSecretKey: uuidv4(),
    });
    res.status(StatusCodes.CREATED);
    res.send({ message: "user created successfully", data: userData });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send({ message: constants.SOMETHING_WENT_WRONG, error: err });
  }
};
