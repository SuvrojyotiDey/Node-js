import { StatusCodes } from "http-status-codes";
import { empData } from "../../data/empData.js";
import names from "random-names-generator";
import { validateDataPresence } from "../../utils/validateDataPresence.js";
import constants from "../../common/constants.js";

export const updateEmpCtrl = (req, res) => {
  try {
    const { id } = req.params;
    // check if id exists
    if (validateDataPresence(empData, id).length > 0) {
      const empDetails = empData.map((emp) => {
        if (emp.id === parseInt(id)) {
          emp.empName = names.random();
        }
        return emp;
      });
      empData.length = 0;
      empData.push(...empDetails);
      res.status(StatusCodes.OK);
      res.send({ message: "emp updated", data: empData });
    } else {
      res.status(StatusCodes.BAD_REQUEST);
      res.send({ message: `emp ${id} not Found`, data: empData });
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send({ message: constants.SOMETHING_WENT_WRONG, error: err });
  }
};
