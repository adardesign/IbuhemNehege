import React, { Component } from "react";
import "./styles/App.css";
import AppHeader from "./Components/AppHeader";
import Today from "./Components/Today";
import ResourceLinks from "./Components/ResourceLinks";
import { withStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function App(props) {
  const { classes } = props;
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Paper className={classes.paper}>
            <Today />
          </Paper>
          <Paper className={classes.paper}>
            <ResourceLinks/>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}
export default withStyles(styles)(App);
