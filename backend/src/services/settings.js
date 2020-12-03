import { settingsModel } from "../loaders/mysql";

export default class SettingsService {
  async GetAllSettings() {
    try {
      return settingsModel.findAll();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async GetSettings(id) {
    try {
      const setting = await settingsModel.findOne({
        where: {
          id: id,
        },
      });

      if (!setting) return null;

      setting.keywords = setting.keywords?.values;
      setting.sites = setting.sites?.values;
      setting.browsers = setting.browsers;
      setting.timeOptions = setting.timeOptions;
      setting.deviceOptions = setting.deviceOptions;
      setting.actions = setting.actions;

      return setting;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async CreateSettings() {
    try {
      return await settingsModel.create();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async UpdateSettings(id, fields) {
    try {
      const settingsForDatabase = {
        keywords: {},
        sites: {},
        browsers: fields.browsers,
        isIncognito: fields.isIncognito,
        timeOptions: fields.timeOptions,
        deviceOptions: fields.deviceOptions,
        actions: fields.actions,
      };

      fields.keywords != null
        ? (settingsForDatabase.keywords.values = fields.keywords)
        : null;
      fields.sites != null
        ? (settingsForDatabase.sites.values = fields.sites)
        : null;

      return await settingsModel.update(
        {
          keywords: settingsForDatabase.keywords,
          sites: settingsForDatabase.sites,
          browsers: settingsForDatabase.browsers,
          isIncognito: settingsForDatabase.isIncognito,
          timeOptions: settingsForDatabase.timeOptions,
          deviceOptions: settingsForDatabase.deviceOptions,
          actions: settingsForDatabase.actions,
        },
        {
          where: {
            id: id,
          },
        }
      );
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
