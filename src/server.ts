import express from "express";
import ChannelRouter from "./routes";
import { randomBytes } from "crypto";
import bodyParser from "body-parser";

export const frontId = "4eef3112a1700ef0ceb0";
export const frontSecret = "1a6f0efaed17c3dae4884248b31b4e7ccc1c0724";
export const frontUrl = "https://api2.frontapp.com/";
export const callbackHostname = "https://e30c-96-37-102-208.ngrok-free.app/";
export const serverPort = "3000";

export function randomString(length: number): string {
  return randomBytes(Math.floor(length / 2)).toString("hex");
}

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(ChannelRouter);

app.listen(serverPort, () => {
  console.log(`Express server listening on port ${serverPort}`);
});
