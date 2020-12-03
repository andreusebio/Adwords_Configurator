import React, { useState, useEffect } from "react";
import { FormControlLabel, Checkbox, Typography } from "@material-ui/core";

// styles
import useStyles from "./styles";

const BrowsersAndIncognito = ({ settings, updateField }) => {
  const [chrome, setChrome] = useState(true);
  const [firefox, setFirefox] = useState(true);
  const [explorer, setExplorer] = useState(false);
  const [safari, setSafari] = useState(false);
  const [opera, setOpera] = useState(false);
  const [isIncognito, setIsIncognito] = useState(true);

  var classes = useStyles();

  useEffect(() => {
    setChrome(settings.browsers?.chrome);
    setFirefox(settings.browsers?.firefox);
    setExplorer(settings.browsers?.explorer);
    setSafari(settings.browsers?.safari);
    setOpera(settings.browsers?.opera);
    setIsIncognito(settings.isIncognito);
  }, [settings]);

  const handleIncognitoChange = () => {
    updateField("isIncognito", !isIncognito);
  };

  const handleBrowserChange = (identifier) => {
    const browsers = {
      chrome,
      firefox,
      explorer,
      safari,
      opera,
    };

    switch (identifier) {
      case "chrome":
        browsers.chrome = !chrome;
        break;
      case "firefox":
        browsers.firefox = !firefox;
        break;
      case "explorer":
        browsers.explorer = !explorer;
        break;
      case "safari":
        browsers.safari = !safari;
        break;
      case "opera":
        browsers.opera = !opera;
        break;
      default:
        console.log("Type not found");
    }

    updateField("browsers", browsers);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div className={classes.browserBox}>
        <FormControlLabel
          className={classes.outlinedCheckBox}
          style={chrome ? { borderColor: "#e6c90e" } : null}
          control={
            <Checkbox
              style={chrome ? { color: "#e6c90e" } : null}
              checked={chrome}
              onChange={(e) => handleBrowserChange("chrome")}
              name="chromeCheckbox"
              color="default"
            />
          }
          label={
            <Typography className={classes.checkboxLabel}>Chrome</Typography>
          }
        />
        <FormControlLabel
          className={classes.outlinedCheckBox}
          style={firefox ? { borderColor: "#e6c90e" } : null}
          control={
            <Checkbox
              style={firefox ? { color: "#e6c90e" } : null}
              checked={firefox}
              onChange={(e) => handleBrowserChange("firefox")}
              name="chromeCheckbox"
              color="default"
            />
          }
          label={
            <Typography className={classes.checkboxLabel}>Firefox</Typography>
          }
        />
        <FormControlLabel
          className={classes.outlinedCheckBox}
          style={explorer ? { borderColor: "#e6c90e" } : null}
          control={
            <Checkbox
              style={explorer ? { color: "#e6c90e" } : null}
              checked={explorer}
              onChange={(e) => handleBrowserChange("explorer")}
              name="chromeCheckbox"
              color="default"
            />
          }
          label={
            <Typography className={classes.checkboxLabel}>Explorer</Typography>
          }
        />
        <FormControlLabel
          className={classes.outlinedCheckBox}
          style={safari ? { borderColor: "#e6c90e" } : null}
          control={
            <Checkbox
              style={safari ? { color: "#e6c90e" } : null}
              checked={safari}
              onChange={(e) => handleBrowserChange("safari")}
              name="chromeCheckbox"
              color="default"
            />
          }
          label={
            <Typography className={classes.checkboxLabel}>Safari</Typography>
          }
        />
        <FormControlLabel
          className={classes.outlinedCheckBox}
          style={opera ? { borderColor: "#e6c90e" } : null}
          control={
            <Checkbox
              style={opera ? { color: "#e6c90e" } : null}
              checked={opera}
              onChange={(e) => handleBrowserChange("opera")}
              name="chromeCheckbox"
              color="default"
            />
          }
          label={
            <Typography className={classes.checkboxLabel}>Opera</Typography>
          }
        />
      </div>
      <div className={classes.incognitoBox}>
        <FormControlLabel
          className={classes.outlinedCheckBox}
          style={isIncognito ? { borderColor: "#e6c90e" } : null}
          control={
            <Checkbox
              style={isIncognito ? { color: "#e6c90e" } : null}
              className={classes.browserCheckbox}
              checked={isIncognito}
              onChange={handleIncognitoChange}
              name="chromeCheckbox"
              color="default"
            />
          }
          label={
            <Typography className={classes.checkboxLabel}>Incognito</Typography>
          }
        />
      </div>
    </div>
  );
};

export default BrowsersAndIncognito;
