import React, { useState, useEffect } from "react";
import { Button, InputBase, Typography } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import LocalOffer from "@material-ui/icons/LocalOffer";

// styles
import useStyles from "./styles";

const mockKeywords = ["pineapple", "shark", "red"];

const Keywords = ({ keywords = mockKeywords, updateField }) => {
  const [keywordsList, setKeywordsList] = useState(keywords);
  const [newKeyword, setNewKeyword] = useState("");
  var classes = useStyles();

  useEffect(() => {
    setKeywordsList(keywords);
  }, [keywords]);

  const handleAdd = (e) => {
    //check if empty or repeated
    if (/\S/.test(newKeyword) && keywordsList.indexOf(newKeyword) === -1) {
      keywordsList.push(newKeyword);
      setNewKeyword("");
      updateField("keywords", keywordsList);
    } else {
      setNewKeyword("");
    }
  };

  const deleteKeyword = (index) => {
    keywordsList.splice(index, 1);
    updateField("keywords", keywordsList);
  };

  return (
    <div>
      <div className={classes.addListBoxTitle} style={{ color: "#129cde" }}>
        <LocalOffer />
        <div className={classes.title}>Keywords</div>
      </div>
      <div className={classes.addListBox}>
        <div className={classes.addListForm}>
          <InputBase
            className={classes.addListBoxInputField}
            placeholder="Enter your keyword here"
            inputProps={{ "aria-label": "naked" }}
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            size="small"
            className={classes.addKeywordButton}
            startIcon={<AddCircleOutlineIcon />}
            onClick={handleAdd}
            disableElevation
          >
            Add
          </Button>
        </div>
        <div className={classes.itemsBox}>
          {keywordsList.map((keywordItem, index) => (
            <div key={index} className={classes.listItem}>
              <Typography className={classes.listItemText}>
                {keywordItem}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                className={classes.clearButton}
                startIcon={<RemoveCircleOutlineIcon />}
                disableElevation
                onClick={(e) => deleteKeyword(index)}
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

export default Keywords;
