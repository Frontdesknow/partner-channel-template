import express from "express";
import ChannelRouter from "./routes";
import { randomBytes } from "crypto";
import bodyParser from "body-parser";

export const frontId = "6601c0bd20c1105b";
export const frontSecret = "b537de67f216bd3aa30d4762534478d2";
export const frontUrl = "https://api2.frontapp.com/";
export const callbackHostname =
  "https://frontapp-test-4f90c17ba086.herokuapp.com";
export const serverPort = "3000";

export function randomString(length: number): string {
  return randomBytes(Math.floor(length / 2)).toString("hex");
}

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(ChannelRouter);

// app.listen(serverPort, () => {
//   console.log(`Express server listening on port ${serverPort}`);
// });
app.listen(process.env.PORT || serverPort, () => {
  console.log(
    `Express server listening on port ${process.env.PORT || serverPort}`
  );
});
