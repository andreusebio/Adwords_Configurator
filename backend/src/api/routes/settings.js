import { Router } from "express";
import SettingsService from "../../services/settings";

const route = Router();

export default (app) => {
  app.use("/settings", route);
  const settingsService = new SettingsService();

  route.get("/", async (req, res, next) => {
    try {
      const settings = await settingsService.GetAllSettings();
      return res.json(settings).status(200);
    } catch (e) {
      return next(e);
    }
  });

  route.post("/", async (req, res, next) => {
    try {
      const newSettings = await settingsService.CreateSettings();
      return res.json(newSettings.id).status(200);
    } catch (e) {
      return next(e);
    }
  });

  route.get("/:id", async (req, res, next) => {
    try {
      if (!isNumeric(req.params.id))
        throw new Error("Invalid ID: id must be numeric");

      const settings = await settingsService.GetSettings(req.params.id);

      if (!settings) throw new Error("No settings were found for given ID");

      return res.json(settings).status(200);
    } catch (e) {
      return next(e);
    }
  });

  route.put("/:id", async (req, res, next) => {
    try {
      if (!isNumeric(req.params.id))
        throw new Error("Invalid ID: id must be numeric");
      return res
        .json(await settingsService.UpdateSettings(req.params.id, req.body))
        .status(200);
    } catch (e) {
      return next(e);
    }
  });
};

function isNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(Number(str)) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}
