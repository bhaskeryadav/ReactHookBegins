import React from "react";
import Header from "../reusable/header";
import AppRouter from "./routes";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    top: theme.spacing(10),
    right: theme.spacing(2)
  }
}));

export const BaseTemplate = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Box m={2} className={classes.root}>
          <AppRouter />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default BaseTemplate;
