import React, { useState, useEffect } from "react";
import Keywords from "./components/Keywords";
import Sites from "./components/Sites";
import OtherSettings from "./components/OtherSettings";

import { updateSettings } from "./utils";

// styles
import useStyles from "./styles";

const AdwordsConfigurator = ({ topSettings, onStart, onStop, onExport }) => {
  const [settings, setSettings] = useState(topSettings);
  const classes = useStyles();

  useEffect(() => {
    setSettings(topSettings);
  }, [topSettings]);

  const updateField = (fieldName, field) => {
    const updatedSettings = {
      ...settings,
      [fieldName]: field,
    };

    setSettings(updatedSettings);
    updateSettings(settings.id, updatedSettings);
  };

  return (
    <div className={classes.configuratorBox}>
      <Keywords keywords={settings.keywords} updateField={updateField} />
      <Sites sites={settings.sites} updateField={updateField} />
      <OtherSettings
        settings={settings}
        updateField={updateField}
        onStart={onStart}
        onStop={onStop}
        onExport={onExport}
      />
    </div>
  );
};

export default AdwordsConfigurator;
