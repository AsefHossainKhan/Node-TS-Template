import { Router } from "express";
import PersonService from "../services/person.service";

const personRouter = Router();

personRouter.get("/", async (req, res) => {
  const allPersons = await PersonService.findAll();
  res.send(allPersons);
});

personRouter.post("/", async (req, res) => {
  const output = await PersonService.create(req.body);
  res.send(output);
});

export default personRouter;
