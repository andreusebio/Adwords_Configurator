import {
  getSettingsDB,
  createNewSettingsEntryDB,
  updateSettingsDB,
} from "./configuratorAPI";

export const processAndSetSettings = async (id, setSettings) => {
  try {
    const receivedSettings = await getSettingsDB(id).then((res) => res.data);
    setSettings(receivedSettings);
  } catch (e) {
    console.log(e);
    //in case no settings exist for given ID
    const newSettingsId = await createNewSettingsEntryDB().then(
      (res) => res.data
    );
    processAndSetSettings(newSettingsId, setSettings);
  }
};

export const updateSettings = async (id, updatedSettings) => {
  updateSettingsDB(id, updatedSettings);
};
