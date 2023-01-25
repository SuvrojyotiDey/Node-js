import { StatusCodes } from "http-status-codes";
import { deptData } from "../../data/deptData.js";
import names from "random-names-generator";
import { validateDataPresence } from "../../utils/validateDataPresence.js";
import constants from "../../common/constants.js";

export const updateDeptCtrl = (req, res) => {
  try {
    const { id } = req.params;
    // check if id exists
    if (validateDataPresence(deptData, id).length > 0) {
      const deptDetails = deptData.map((dept) => {
        if (dept.id === parseInt(id)) {
          dept.deptName = names.random();
        }
        return dept;
      });
      deptData.length = 0;
      deptData.push(...deptDetails);
      res.status(StatusCodes.OK);
      res.send({ message: "dept updated", data: deptData });
    } else {
      res.status(StatusCodes.BAD_REQUEST);
      res.send({ message: `dept ${id} not Found`, data: deptData });
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send({ message: constants.SOMETHING_WENT_WRONG, error: err });
  }
};
