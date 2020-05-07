import React from "react";
import { makeStyles } from "@material-ui/core/styles/index";

//Material UI components
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";

//Material UI Icons
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    marginLeft: "8px",
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

export default function Input_one() {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} md={6}>
        <Paper className={classes.root}>
          <InputBase className={classes.input} placeholder="Input one" />
          <IconButton className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
    </>
  );
}
