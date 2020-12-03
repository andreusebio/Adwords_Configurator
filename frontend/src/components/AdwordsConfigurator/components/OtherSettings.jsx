import SettingsIcon from "@material-ui/icons/Settings";
import BrowsersAndIncognito from "./BrowsersAndIncognito";
import TimeOptions from "./TimeOptions";
import DeviceOptions from "./DeviceOptions";
import WebpageActions from "./WebpageActions";
import ConfiguratorButtons from "./ConfiguratorButtons";

// styles
import useStyles from "./styles";

const OtherSettings = ({
  settings,
  updateField,
  onExport,
  onStop,
  onStart,
}) => {
  var classes = useStyles();

  return (
    <div style={{ width: "43rem" }}>
      <div className={classes.addListBoxTitle} style={{ color: "#e6c90e" }}>
        <SettingsIcon />
        <div className={classes.title}>Settings</div>
      </div>
      <div>
        <BrowsersAndIncognito settings={settings} updateField={updateField} />
        <TimeOptions settings={settings} updateField={updateField} />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <DeviceOptions settings={settings} updateField={updateField} />
        <WebpageActions settings={settings} updateField={updateField} />
      </div>
      <ConfiguratorButtons
        settings={settings}
        onExport={onExport}
        onStop={onStop}
        onStart={onStart}
      />
    </div>
  );
};

export default OtherSettings;
