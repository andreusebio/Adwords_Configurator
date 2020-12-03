import React, { useState, useEffect } from "react";
import { FormControlLabel, Checkbox, Typography } from "@material-ui/core";

// styles
import useStyles from "./styles";

const DeviceOptions = ({ settings, updateField }) => {
  const [deviceReset, setDeviceReset] = useState(false);
  const [vinnReset, setVinnReset] = useState(true);
  const [phoneReset, setPhoneReset] = useState(true);
  const [mobileData, setMobileData] = useState(true);
  const [flyMode, setFlyMode] = useState(false);

  var classes = useStyles();

  useEffect(() => {
    setDeviceReset(settings.deviceOptions?.deviceReset);
    setVinnReset(settings.deviceOptions?.vinnReset);
    setPhoneReset(settings.deviceOptions?.phoneReset);
    setMobileData(settings.deviceOptions?.mobileData);
    setFlyMode(settings.deviceOptions?.flyMode);
  }, [settings]);

  const handleChange = (identifier) => {
    const deviceOptions = {
      deviceReset,
      vinnReset,
      phoneReset,
      mobileData,
      flyMode,
    };

    switch (identifier) {
      case "deviceReset":
        deviceOptions.deviceReset = !deviceReset;
        break;
      case "vinnReset":
        deviceOptions.vinnReset = !vinnReset;
        break;
      case "phoneReset":
        deviceOptions.phoneReset = !phoneReset;
        break;
      case "mobileData":
        deviceOptions.mobileData = !mobileData;
        break;
      case "flyMode":
        deviceOptions.flyMode = !flyMode;
        break;
      default:
        console.log("Type not found");
    }

    updateField("deviceOptions", deviceOptions);
  };

  return (
    <div>
      <div className={classes.actionsBox}>
        <FormControlLabel
          className={classes.outlinedCheckBox}
          style={deviceReset ? { borderColor: "#1fb317" } : null}
          control={
            <Checkbox
              style={deviceReset ? { color: "#1fb317" } : null}
              checked={deviceReset}
              onChange={(e) => handleChange("deviceReset")}
              name="deviceResetCheckbox"
              color="default"
            />
          }
          label={
            <Typography className={classes.checkboxLabel}>
              Device Reset
            </Typography>
          }
        />
        <FormControlLabel
          className={classes.outlinedCheckBox}
          style={vinnReset ? { borderColor: "#1fb317" } : null}
          control={
            <Checkbox
              style={vinnReset ? { color: "#1fb317" } : null}
              className={classes.browserCheckbox}
              checked={vinnReset}
              onChange={(e) => handleChange("vinnReset")}
              name="vinnResetCheckbox"
              color="default"
            />
          }
          label={
            <Typography className={classes.checkboxLabel}>
              Vinn Reset
            </Typography>
          }
        />
        <FormControlLabel
          className={classes.outlinedCheckBox}
          style={phoneReset ? { borderColor: "#1fb317" } : null}
          control={
            <Checkbox
              style={phoneReset ? { color: "#1fb317" } : null}
              className={classes.browserCheckbox}
              checked={phoneReset}
              onChange={(e) => handleChange("phoneReset")}
              name="phoneResetCheckbox"
              color="default"
            />
          }
          label={
            <Typography className={classes.checkboxLabel}>
              Phone Reset
            </Typography>
          }
        />
        <FormControlLabel
          className={classes.outlinedCheckBox}
          style={mobileData ? { borderColor: "#1fb317" } : null}
          control={
            <Checkbox
              style={mobileData ? { color: "#1fb317" } : null}
              className={classes.browserCheckbox}
              checked={mobileData}
              onChange={(e) => handleChange("mobileData")}
              name="mobileDataCheckbox"
              color="default"
            />
          }
          label={
            <Typography className={classes.checkboxLabel}>
              Mobile Data
            </Typography>
          }
        />
        <FormControlLabel
          className={classes.outlinedCheckBox}
          style={flyMode ? { borderColor: "#1fb317" } : null}
          control={
            <Checkbox
              style={flyMode ? { color: "#1fb317" } : null}
              className={classes.browserCheckbox}
              checked={flyMode}
              onChange={(e) => handleChange("flyMode")}
              name="flyModeCheckbox"
              color="default"
            />
          }
          label={
            <Typography className={classes.checkboxLabel}>Fly Mode</Typography>
          }
        />
      </div>
    </div>
  );
};

export default DeviceOptions;
