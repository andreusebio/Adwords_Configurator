import config from "../../config";
import axios from "axios";

export const getSettingsDB = async (settingsId) => {
  const endpoint =
    "http://localhost:" + config.apiPort + "/api/settings/" + settingsId;
  const data = await axios.get(endpoint);
  return data;
};

export const createNewSettingsEntryDB = async () => {
  const endpoint = "http://localhost:" + config.apiPort + "/api/settings/";
  const data = await axios.post(endpoint);
  return data;
};

export const updateSettingsDB = async (settingsId, settings) => {
  const endpoint =
    "http://localhost:" + config.apiPort + "/api/settings/" + settingsId;
  await axios.put(endpoint, settings);
};
