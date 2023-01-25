import express from "express";
import roles from "./src/router.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.port;
const host = process.env.host;

roles.listen(port, host, () => {
  console.log(`Server listening at ${host}:${port}`);
});
