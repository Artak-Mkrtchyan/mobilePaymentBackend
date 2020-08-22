import express, { Request, Response } from "express";
import * as bodyParser from "body-parser";
import cors from "cors";

import router from "./routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = 3000;

app.use("/api", router);

app.get("/*", (req: Request, res: Response) => {
  res.send({ text: "Hello world!" });
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
