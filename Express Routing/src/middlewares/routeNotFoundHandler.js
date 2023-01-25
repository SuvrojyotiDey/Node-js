import { StatusCodes } from "http-status-codes";

export const routeNotFoundHandler = (req, res, next) => {
  res.status(StatusCodes.NOT_FOUND);
  res.send({ message: "Route not Valid" });
  next();
};
