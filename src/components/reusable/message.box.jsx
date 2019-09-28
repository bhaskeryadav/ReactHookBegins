import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Messages from "./messages";
import { typography } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    background: "black",
    fontFamily: theme.typography.fontFamily
  }
}));

export default function MessageBox(props) {
  const classes = useStyles();
  const height = {
    full: { height: "100vh" },
    half: { height: "50vh" }
  };
  return (
    <Grid item xs={12} sm={12}>
      <Paper className={classes.paper} style={height[props.height]}>
        {props.title}
        <Messages messages={props.messages} />
      </Paper>
    </Grid>
  );
}
