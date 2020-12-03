const Settings = (sequelize, DataTypes) =>
  sequelize.define(
    "Settings",
    {
      keywords: {
        type: DataTypes.JSON,
      },
      sites: {
        type: DataTypes.JSON,
      },
      browsers: {
        type: DataTypes.JSON,
      },
      isIncognito: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: "is_incognito",
      },
      timeOptions: {
        type: DataTypes.JSON,
        field: "time_options",
      },
      deviceOptions: {
        type: DataTypes.JSON,
        field: "device_options",
      },
      actions: {
        type: DataTypes.JSON,
      },
    },
    {
      tableName: "report_settings",
      timestamps: false,
    }
  );

export default Settings;
