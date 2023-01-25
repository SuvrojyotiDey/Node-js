import { StatusCodes } from "http-status-codes";
import { v4 } from "uuid";

export const addTraceId = (req, res, next) => {
  try {
    req.headers["traceid"] = v4();
    next();
  } catch (err) {
    console.log(err.message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Something went wrong");
  }
};
