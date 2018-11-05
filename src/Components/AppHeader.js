import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1
  }
};

function AppHeader(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <header className="App-header">
              <h1>ברוכים הבאים לחבורת ובהם נהגה</h1>
              <h2>שע’י קהילת עדת יראים – קהל עדת יראים וויען</h2>
              <h3> בנשיאת כ"ק מרן אדמו"ר שליט"א </h3>
            </header>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppHeader);
