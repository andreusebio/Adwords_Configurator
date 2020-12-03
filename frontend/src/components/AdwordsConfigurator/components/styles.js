import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  addListBoxTitle: {
    display: "flex",
    margin: "0.7rem 0.5rem",
  },
  title: {
    color: "white",
    fontSize: "1.2rem",
    margin: "0rem 0.5rem",
  },
  addListBoxInputField: {
    margin: "0.4rem",
    paddingLeft: "0.4rem",
  },
  addListBox: {
    backgroundColor: "#151e4a",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    margin: "0.5rem",
  },
  browserBox: {
    backgroundColor: "#151e4a",
    display: "flex",
    padding: "1rem",
    margin: "0rem 0.1rem 0.1rem 0.5rem",
    width: "76%",
  },
  incognitoBox: {
    backgroundColor: "#151e4a",
    display: "flex",
    padding: "1rem",
    margin: "0rem 0.5rem 0.1rem 0rem",
    width: "21.5%",
  },
  actionsBox: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    backgroundColor: "#151e4a",
    display: "flex",
    padding: "1rem",
    margin: "0rem 0.5rem 0.1rem 0.5rem",
  },
  timeOptionsBox: {
    backgroundColor: "#151e4a",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    paddingRight: "0.3rem",
    paddingLeft: "1.4rem",
    margin: "0rem 0.5rem 0.1rem 0.5rem",
    color: "white",
  },
  buttonsBox: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    display: "flex",
    margin: "0.5rem 0rem 0.1rem 0rem",
  },
  timeOptionsLine: {
    height: "2.5rem",
  },
  timeOptionsCheckbox: {
    paddingRight: "12px",
    color: "white",
  },
  outlinedCheckBox: {
    borderStyle: "solid",
    border: "1px",
    borderRadius: "3px",
    paddingRight: "12px",
    borderColor: "#15507d",
    color: "white",
    margin: "0.2rem 0.2rem",
  },
  checkboxLabel: {
    fontSize: "0.7rem",
  },
  timeOptionsCheckboxLabel: {
    fontSize: "0.9rem",
  },
  addListForm: {
    alignItems: "center",
    display: "flex",
    borderRadius: "3px",
    backgroundColor: "white",
  },
  itemsBox: {
    margin: "1rem 0.1rem",
  },
  listItem: {
    color: "white",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  listItemText: {
    maxWidth: "12rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "15px",
  },

  addKeywordButton: {
    margin: theme.spacing(1),
    textTransform: "none",
    fontSize: "small",
    color: "white",
    backgroundColor: "#129cde",
    "&:hover": {
      backgroundColor: "#045b85",
    },
  },
  addSiteButton: {
    margin: theme.spacing(1),
    textTransform: "none",
    fontSize: "small",
    color: "white",
    backgroundColor: "#1fb317",
    "&:hover": {
      backgroundColor: "green",
    },
  },
  clearButton: {
    margin: theme.spacing(1),
    color: "white",
    borderColor: "#15507d",
    textTransform: "none",
    fontSize: "small",
    "&:hover": {
      borderColor: "white",
    },
  },
  numberInput: {
    borderStyle: "solid",
    border: "1px",
    borderRadius: "3px",
    borderColor: "#15507d",
    color: "white",
    width: "55px",
    margin: "0 0.5rem 0 0",
    fontSize: "1rem",
    "& input": {
      padding: "0.3rem 0.2rem 0.3rem 0.4rem",
    },
  },
  exportReportButton: {
    width: "40%",
    margin: theme.spacing(1),
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#e6c90e",
    padding: "0.6rem 2rem",
    "&:hover": {
      backgroundColor: "#94820f",
    },
  },
  stopButton: {
    width: "26%",
    margin: theme.spacing(1),
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#129cde",
    padding: "0.6rem 2rem",
    "&:hover": {
      backgroundColor: "#045b85",
    },
  },
  startButton: {
    width: "26%",
    margin: theme.spacing(1),
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#1fb317",
    padding: "0.6rem 2rem",
    "&:hover": {
      backgroundColor: "green",
    },
  },
}));
