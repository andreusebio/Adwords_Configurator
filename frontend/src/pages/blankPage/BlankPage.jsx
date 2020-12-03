import React, { useState, useEffect } from "react";
import { processAndSetSettings } from "../../components/AdwordsConfigurator/utils";

// components
import AdwordsConfigurator from "../../components/AdwordsConfigurator/AdwordsConfigurator";

const onStart = (settings) => {
  console.log("On start clicked", settings);
};

const onStop = () => {
  console.log("On stop clicked");
};

const onExport = (settings) => {
  console.log("On export clicked", settings);
};

//Id for demo
const id = 1;

export default function BlankPage() {
  const [settings, setSettings] = useState({});

  //Startup
  useEffect(() => {
    processAndSetSettings(id, setSettings);
  }, []);

  return (
    <>
      <AdwordsConfigurator
        topSettings={settings}
        onStart={onStart}
        onStop={onStop}
        onExport={onExport}
      />
    </>
  );
}
