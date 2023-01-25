import { StatusCodes } from "http-status-codes";
import { empData } from "../../data/empData.js";
import { validateDataPresence } from "../../utils/validateDataPresence.js";
import constants from "../../common/constants.js";
export const deleteEmpCtrl = (req, res) => {
  try {
    const { id } = req.params;
    // check if id exists
    if (validateDataPresence(empData, id).length > 0) {
      const emps = empData.filter((emp) => {
        return emp.id !== parseInt(id);
      });
      // unloading the data of the empData
      empData.length = 0;
      // destructuring the new data into the old emptied array
      empData.push(...emps);
      res.status(StatusCodes.OK);
      res.send({ message: `Emp ${id} deleted`, data: empData });
    } else {
      res.status(StatusCodes.BAD_REQUEST);
      res.send({ message: `Emp ${id} not Found`, data: empData });
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    res.send({ message: constants.SOMETHING_WENT_WRONG, error: err });
  }
};
