import React, { useState, useEffect } from "react";
import { FormControlLabel, Checkbox, Typography } from "@material-ui/core";

// styles
import useStyles from "./styles";

const WebpageActions = ({ settings, updateField }) => {
  const [removeCookies, setRemoveCookies] = useState(false);
  const [changeResolution, setChangeResolution] = useState(true);
  const [mouseTracks, setMouseTracks] = useState(false);
  const [dataSavingMode, setDataSavingMode] = useState(false);
  const [randomGenerate, setRandomGenerate] = useState(true);
  const [analyticsProtection, setAnalyticsProtection] = useState(false);
  const [removeHistory, setRemoveHistory] = useState(true);

  var classes = useStyles();

  useEffect(() => {
    setRemoveCookies(settings.actions?.removeCookies);
    setChangeResolution(settings.actions?.changeResolution);
    setMouseTracks(settings.actions?.mouseTracks);
    setDataSavingMode(settings.actions?.dataSavingMode);
    setRandomGenerate(settings.actions?.randomGenerate);
    setAnalyticsProtection(settings.actions?.analyticsProtection);
    setRemoveHistory(settings.actions?.removeHistory);
  }, [settings]);

  const handleChange = (identifier) => {
    const actions = {
      removeCookies,
      changeResolution,
      mouseTracks,
      dataSavingMode,
      randomGenerate,
      analyticsProtection,
      removeHistory,
    };

    switch (identifier) {
      case "removeCookies":
        actions.removeCookies = !removeCookies;
        break;
      case "changeResolution":
        actions.changeResolution = !changeResolution;
        break;
      case "mouseTracks":
        actions.mouseTracks = !mouseTracks;
        break;
      case "dataSavingMode":
        actions.dataSavingMode = !dataSavingMode;
        break;
      case "randomGenerate":
        actions.randomGenerate = !randomGenerate;
        break;
      case "analyticsProtection":
        actions.analyticsProtection = !analyticsProtection;
        break;
      case "removeHistory":
        actions.removeHistory = !removeHistory;
        break;
      default:
        console.log("Type not found");
    }

    updateField("actions", actions);
  };

  return (
    <div className={classes.actionsBox}>
      <FormControlLabel
        className={classes.outlinedCheckBox}
        style={removeCookies ? { borderColor: "#129cde" } : null}
        control={
          <Checkbox
            style={removeCookies ? { color: "#129cde" } : null}
            checked={removeCookies}
            onChange={(e) => handleChange("removeCookies")}
            name="removeCookiesCheckbox"
            color="default"
          />
        }
        label={
          <Typography className={classes.checkboxLabel}>
            Remove Cookies
          </Typography>
        }
      />
      <FormControlLabel
        className={classes.outlinedCheckBox}
        style={changeResolution ? { borderColor: "#129cde" } : null}
        control={
          <Checkbox
            style={changeResolution ? { color: "#129cde" } : null}
            checked={changeResolution}
            onChange={(e) => handleChange("changeResolution")}
            name="changeResolutionCheckbox"
            color="default"
          />
        }
        label={
          <Typography className={classes.checkboxLabel}>
            Change Resolution
          </Typography>
        }
      />
      <FormControlLabel
        className={classes.outlinedCheckBox}
        style={mouseTracks ? { borderColor: "#129cde" } : null}
        control={
          <Checkbox
            style={mouseTracks ? { color: "#129cde" } : null}
            checked={mouseTracks}
            onChange={(e) => handleChange("mouseTracks")}
            name="mouseTracksCheckbox"
            color="default"
          />
        }
        label={
          <Typography className={classes.checkboxLabel}>
            Mouse Tracks
          </Typography>
        }
      />
      <FormControlLabel
        className={classes.outlinedCheckBox}
        style={dataSavingMode ? { borderColor: "#129cde" } : null}
        control={
          <Checkbox
            style={dataSavingMode ? { color: "#129cde" } : null}
            checked={dataSavingMode}
            onChange={(e) => handleChange("dataSavingMode")}
            name="dataSavingModeCheckbox"
            color="default"
          />
        }
        label={
          <Typography className={classes.checkboxLabel}>
            Data Saving Mode
          </Typography>
        }
      />
      <FormControlLabel
        className={classes.outlinedCheckBox}
        style={randomGenerate ? { borderColor: "#129cde" } : null}
        control={
          <Checkbox
            style={randomGenerate ? { color: "#129cde" } : null}
            checked={randomGenerate}
            onChange={(e) => handleChange("randomGenerate")}
            name="randomGenerateCheckbox"
            color="default"
          />
        }
        label={
          <Typography className={classes.checkboxLabel}>
            Random Generate
          </Typography>
        }
      />
      <FormControlLabel
        className={classes.outlinedCheckBox}
        style={analyticsProtection ? { borderColor: "#129cde" } : null}
        control={
          <Checkbox
            style={analyticsProtection ? { color: "#129cde" } : null}
            checked={analyticsProtection}
            onChange={(e) => handleChange("analyticsProtection")}
            name="analyticsProtectionCheckbox"
            color="default"
          />
        }
        label={
          <Typography className={classes.checkboxLabel}>
            Analytics Protection
          </Typography>
        }
      />
      <FormControlLabel
        className={classes.outlinedCheckBox}
        style={removeHistory ? { borderColor: "#129cde" } : null}
        control={
          <Checkbox
            style={removeHistory ? { color: "#129cde" } : null}
            checked={removeHistory}
            onChange={(e) => handleChange("removeHistory")}
            name="removeHistoryCheckbox"
            color="default"
          />
        }
        label={
          <Typography className={classes.checkboxLabel}>
            Remove History
          </Typography>
        }
      />
    </div>
  );
};

export default WebpageActions;
