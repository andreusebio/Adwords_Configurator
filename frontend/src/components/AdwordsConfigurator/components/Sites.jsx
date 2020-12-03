import React, { useState, useEffect } from "react";
import { Button, InputBase, Typography } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import DvrIcon from "@material-ui/icons/Dvr";

// styles
import useStyles from "./styles";

const mockSites = [
  "www.sardine.pt",
  "www.myDog.uk",
  "www.RedAndGreen.com",
  "www.karmin.gov",
  "https://wikipedia.org/wiki/React_(JavaScript)",
];

const Sites = ({ sites = mockSites, updateField }) => {
  const [sitesList, setSitesList] = useState(sites);
  const [newSite, setNewSite] = useState("");
  var classes = useStyles();

  useEffect(() => {
    setSitesList(sites);
  }, [sites]);

  const handleAdd = (e) => {
    //check if repeated
    if (/\S/.test(newSite) && sitesList.indexOf(newSite) === -1) {
      sitesList.push(newSite);
      setNewSite("");
      updateField("sites", sitesList);
    } else {
      setNewSite("");
    }
  };

  const deleteSite = (index) => {
    sitesList.splice(index, 1);
    updateField("sites", sitesList);
  };

  return (
    <div>
      <div className={classes.addListBoxTitle} style={{ color: "#1fb317" }}>
        <DvrIcon />
        <div className={classes.title}>Sites</div>
      </div>
      <div className={classes.addListBox}>
        <div className={classes.addListForm}>
          <InputBase
            key="formInput"
            className={classes.addListBoxInputField}
            placeholder="Enter your site here"
            inputProps={{ "aria-label": "naked" }}
            value={newSite}
            type="url"
            onChange={(e) => setNewSite(e.target.value)}
            error={true}
          />
          <Button
            key="formSubmit"
            variant="contained"
            size="small"
            className={classes.addSiteButton}
            startIcon={<AddCircleOutlineIcon />}
            onClick={handleAdd}
            disableElevation
          >
            Add
          </Button>
        </div>
        <div key="sitesItemsBox" className={classes.itemsBox}>
          {sitesList.map((siteItem, index) => (
            <div key={index} className={classes.listItem}>
              <Typography className={classes.listItemText}>
                {siteItem}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                className={classes.clearButton}
                startIcon={<RemoveCircleOutlineIcon />}
                disableElevation
                onClick={(e) => deleteSite(index)}
              >
                Clear
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sites;
