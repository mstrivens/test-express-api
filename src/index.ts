import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { fetchData } from './utils/fetchData'
import { transformData } from './utils/transformData'
import { type RandomUser } from "./types/randomUser"

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT || '3000';

app.get("/api/users", async (req: Request, res: Response) => {
  // initialise in memory db?
  // populate db with api instances
  // return in memory db to user
  const data: RandomUser = await fetchData('https://randomuser.me/api/')
  res.send(transformData(data));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});