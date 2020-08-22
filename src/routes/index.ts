import express, { Request, Response } from "express";

import { operators } from "../data/operators";

const router = express.Router();

router.get("/*", (req: Request, res: Response) => {
  res.send({ operators });
});

router.post("/operator", (req: Request, res: Response) => {
  const operator = operators.filter((item) => item.name === req.body.name);
  res.send({ operator: operator[0] });
});

router.post("/fill_balance", (req: Request, res: Response) => {
  res.send({ status: "success" });
});

export default router;
