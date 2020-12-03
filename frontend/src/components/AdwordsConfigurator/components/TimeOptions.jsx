import React, { useState, useEffect } from "react";
import {
  FormControlLabel,
  Checkbox,
  InputBase,
  Typography,
} from "@material-ui/core";

// styles
import useStyles from "./styles";

const TimeOptions = ({ settings, updateField }) => {
  const [targetedSiteMinWaitTime, setTargetedSiteMinWaitTime] = useState(30);
  const [targetedSiteMaxWaitTime, setTargetedSiteMaxWaitTime] = useState(60);
  const [visitPage, setVisitPage] = useState(false);
  const [pages, setPages] = useState(1);
  const [pageVisitMinTime, setPageVisitMinTime] = useState(30);
  const [pageVisitMaxTime, setPageVisitMaxTime] = useState(60);
  const [afterCompleteMinWaitTime, setAfterCompleteMinWaitTime] = useState(5);
  const [afterCompleteMaxWaitTime, setAfterCompleteMaxWaitTime] = useState(10);
  const [timesToTargetSite, setTimesToTargetSite] = useState(10);
  const [waitTimeIfNotFound, setWaitTimeIfNotFound] = useState(20);
  const [numberOfResets, setNumberOfResets] = useState(1);

  var classes = useStyles();

  useEffect(() => {
    setTargetedSiteMinWaitTime(settings.timeOptions?.targetedSiteMinWaitTime);
    setTargetedSiteMaxWaitTime(settings.timeOptions?.targetedSiteMaxWaitTime);
    setVisitPage(settings.timeOptions?.visitPage);
    setPages(settings.timeOptions?.pages);
    setPageVisitMinTime(settings.timeOptions?.pageVisitMinTime);
    setPageVisitMaxTime(settings.timeOptions?.pageVisitMaxTime);
    setAfterCompleteMinWaitTime(settings.timeOptions?.afterCompleteMinWaitTime);
    setAfterCompleteMaxWaitTime(settings.timeOptions?.afterCompleteMaxWaitTime);
    setTimesToTargetSite(settings.timeOptions?.timesToTargetSite);
    setWaitTimeIfNotFound(settings.timeOptions?.waitTimeIfNotFound);
    setNumberOfResets(settings.timeOptions?.numberOfResets);
  }, [settings]);

  const handleCheckboxChange = (identifier) => {
    const timeOptions = {
      targetedSiteMinWaitTime,
      targetedSiteMaxWaitTime,
      visitPage,
      pages,
      pageVisitMinTime,
      pageVisitMaxTime,
      afterCompleteMinWaitTime,
      afterCompleteMaxWaitTime,
      timesToTargetSite,
      waitTimeIfNotFound,
      numberOfResets,
    };
    switch (identifier) {
      case "visitPage":
        timeOptions.visitPage = !visitPage;
        break;
      default:
        console.log("Type not found");
    }
    updateField("timeOptions", timeOptions);
  };

  const handleBlur = (value, setValue) => {
    if (value < 0) {
      setValue(0);
    } else if (value > 999) {
      setValue(999);
    } else {
      const timeOptions = {
        targetedSiteMinWaitTime,
        targetedSiteMaxWaitTime,
        visitPage,
        pages,
        pageVisitMinTime,
        pageVisitMaxTime,
        afterCompleteMinWaitTime,
        afterCompleteMaxWaitTime,
        timesToTargetSite,
        waitTimeIfNotFound,
        numberOfResets,
      };
      updateField("timeOptions", timeOptions);
    }
  };

  return (
    <div className={classes.timeOptionsBox}>
      <div className={classes.timeOptionsLine}>
        Wait
        <InputBase
          style={{ marginLeft: "0.5rem" }}
          className={classes.numberInput}
          value={targetedSiteMinWaitTime}
          onChange={(e) => setTargetedSiteMinWaitTime(e.target.value)}
          onBlur={(e) => handleBlur(e.target.value, setTargetedSiteMinWaitTime)}
          inputProps={{
            step: 1,
            min: 0,
            max: 999,
            type: "number",
          }}
        />
        <InputBase
          className={classes.numberInput}
          value={targetedSiteMaxWaitTime}
          onChange={(e) => setTargetedSiteMaxWaitTime(e.target.value)}
          onBlur={(e) => handleBlur(e.target.value, setTargetedSiteMaxWaitTime)}
          inputProps={{
            step: 1,
            min: 0,
            max: 999,
            type: "number",
          }}
        />
        seconds on the targeted Website.
      </div>
      <div
        className={classes.timeOptionsLine}
        style={{ marginBottom: "0.4rem" }}
      >
        <FormControlLabel
          className={classes.timeOptionsCheckbox}
          control={
            <Checkbox
              checked={visitPage}
              onChange={(e) => handleCheckboxChange("visitPage")}
              name="chromeCheckbox"
              color="default"
            />
          }
          label={
            <Typography
              className={classes.timeOptionsCheckboxLabel}
              style={visitPage ? { fontWeight: "bold" } : null}
            >
              Visit the Page within the Site
            </Typography>
          }
        />
      </div>
      <div className={classes.timeOptionsLine}>
        <InputBase
          className={classes.numberInput}
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          onBlur={(e) => handleBlur(e.target.value, setPages)}
          inputProps={{
            step: 1,
            min: 0,
            max: 999,
            type: "number",
          }}
        />
        pages
        <InputBase
          style={{ marginLeft: "0.5rem" }}
          className={classes.numberInput}
          value={pageVisitMinTime}
          onChange={(e) => setPageVisitMinTime(e.target.value)}
          onBlur={(e) => handleBlur(e.target.value, setPageVisitMinTime)}
          inputProps={{
            step: 1,
            min: 0,
            max: 999,
            type: "number",
          }}
        />
        <InputBase
          className={classes.numberInput}
          value={pageVisitMaxTime}
          onChange={(e) => setPageVisitMaxTime(e.target.value)}
          onBlur={(e) => handleBlur(e.target.value, setPageVisitMaxTime)}
          inputProps={{
            step: 1,
            min: 0,
            max: 999,
            type: "number",
          }}
        />
        visit form to second.
      </div>
      <div className={classes.timeOptionsLine}>
        After the operation is complete
        <InputBase
          style={{ marginLeft: "0.5rem" }}
          className={classes.numberInput}
          value={afterCompleteMinWaitTime}
          onChange={(e) => setAfterCompleteMinWaitTime(e.target.value)}
          onBlur={(e) =>
            handleBlur(e.target.value, setAfterCompleteMinWaitTime)
          }
          inputProps={{
            step: 1,
            min: 0,
            max: 999,
            type: "number",
          }}
        />
        <InputBase
          className={classes.numberInput}
          value={afterCompleteMaxWaitTime}
          onChange={(e) => setAfterCompleteMaxWaitTime(e.target.value)}
          onBlur={(e) =>
            handleBlur(e.target.value, setAfterCompleteMaxWaitTime)
          }
          inputProps={{
            step: 1,
            min: 0,
            max: 999,
            type: "number",
          }}
        />
        seconds wait.
      </div>
      <div className={classes.timeOptionsLine}>
        Target site
        <InputBase
          style={{ marginLeft: "0.5rem" }}
          className={classes.numberInput}
          value={timesToTargetSite}
          onChange={(e) => setTimesToTargetSite(e.target.value)}
          onBlur={(e) => handleBlur(e.target.value, setTimesToTargetSite)}
          inputProps={{
            step: 1,
            min: 0,
            max: 999,
            type: "number",
          }}
        />
        if not found times
        <InputBase
          style={{ marginLeft: "0.5rem" }}
          className={classes.numberInput}
          value={waitTimeIfNotFound}
          onChange={(e) => setWaitTimeIfNotFound(e.target.value)}
          onBlur={(e) => handleBlur(e.target.value, setWaitTimeIfNotFound)}
          inputProps={{
            step: 1,
            min: 0,
            max: 999,
            type: "number",
          }}
        />
        minutes wait.
      </div>

      <div className={classes.timeOptionsLine}>
        <InputBase
          className={classes.numberInput}
          value={numberOfResets}
          onChange={(e) => setNumberOfResets(e.target.value)}
          onBlur={(e) => handleBlur(e.target.value, setNumberOfResets)}
          inputProps={{
            step: 1,
            min: 0,
            max: 999,
            type: "number",
          }}
        />
        automatic reset after operation.
      </div>
    </div>
  );
};

export default TimeOptions;
