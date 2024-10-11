import express from "express";
import config from "./config";
import { expressSetup } from "./utils";

const app = express();
expressSetup(app);
// Start the server and listen on the specified port
app.listen(config.port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${config.port}`);
});
