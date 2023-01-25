import { StatusCodes } from "http-status-codes";
import { deptData } from "../../data/deptData.js";
import { validateDataPresence } from "../../utils/validateDataPresence.js";
import constants from "../../common/constants.js";
export const deleteDeptCtrl = (req, res) => {
  try {
    const { id } = req.params;
    // check if id exists
    if (validateDataPresence(deptData, id).length > 0) {
      const depts = deptData.filter((dept) => {
        return dept.id !== parseInt(id);
      });
      // unloading the data of the deptData
      deptData.length = 0;
      // destructuring the new data into the old emptied array
      deptData.push(...depts);
      res.status(StatusCodes.OK);
      res.send({ message: `dept ${id} deleted`, data: deptData });
    } else {
      res.status(StatusCodes.BAD_REQUEST);
      res.send({ message: `User ${id} not Found`, data: deptData });
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send({ message: constants.SOMETHING_WENT_WRONG, error: err });
  }
};
