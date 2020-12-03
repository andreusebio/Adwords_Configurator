import React from "react";
import { Button } from "@material-ui/core";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

// styles
import useStyles from "./styles";

const ConfiguratorButtons = ({ settings, onExport, onStop, onStart }) => {
  var classes = useStyles();

  return (
    <div className={classes.buttonsBox}>
      <Button
        key="exportAction"
        variant="contained"
        size="large"
        className={classes.exportReportButton}
        onClick={(e) => onExport(settings)}
        disableElevation
      >
        Export report
      </Button>
      <Button
        key="stopAction"
        variant="contained"
        size="large"
        className={classes.stopButton}
        onClick={onStop}
        disableElevation
        startIcon={<PauseCircleOutlineIcon />}
      >
        Stop
      </Button>
      <Button
        key="startAction"
        variant="contained"
        size="large"
        className={classes.startButton}
        onClick={(e) => onStart(settings)}
        disableElevation
        startIcon={<PlayCircleOutlineIcon />}
      >
        Start
      </Button>
    </div>
  );
};

export default ConfiguratorButtons;
