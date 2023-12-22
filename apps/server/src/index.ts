import Express from "express";
import connect from "./db";

const app = Express();
app.use(Express.json());

connect();

app.get("/", (req: any, res: any) => {
  res.send("hello world");
});

app.listen(4000);
