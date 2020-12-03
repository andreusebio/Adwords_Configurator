import { Router } from "express";
import settings from "./routes/settings";

// guaranteed to get dependencies
export default () => {
  const app = Router();
  settings(app);

  return app;
};
