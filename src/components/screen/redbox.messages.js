import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getMessages, addMessage } from "../../reducers/api-consumers/messages";
import MessageBox from "../reusable/message.box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import getSocket from "../../commons/socketService";
import {
  CHANNELS,
  getCountry,
  SUBSCRIBE_CHANNEL
} from "../../commons/constants";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    background: "black"
  },
  gridList: {
    width: "auto",
    height: "80vh"
  }
}));

export const RedboxMessages = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messageReducer.get("messages"));
  const channels = CHANNELS[getCountry()];
  console.log("channels", channels);
  if (messages.size === 0) dispatch(getMessages());

  // To be added in the landing page
  useEffect(() => {
    console.log(
      "calling use effect in about js ",
      `${SUBSCRIBE_CHANNEL}${getCountry()}`
    );
    const sock = getSocket();
    sock.on(`${SUBSCRIBE_CHANNEL}${getCountry()}`, data => {
      console.log(">>>>>>>>>>>>", data);

      if (data) {
        console.log(data.category);
        addMessage(data, dispatch);
      }
    });
  }, [dispatch]);

  const space = 1;
  return (
    <div className={classes.root}>
      <Grid container justify="space-evenly" className={classes.gridList}>
        <Grid container xs={12} sm={4} spacing={space}>
          <MessageBox
            title={"Global"}
            messages={messages.filter(msg => msg.category === "Global")}
            height={"half"}
          />
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper} style={{ height: "50vh" }}>
              B
            </Paper>
          </Grid>
        </Grid>

        <Grid container xs={12} sm={4} spacing={space}>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper} style={{ height: "105vh" }}>
              {" "}
              Full height{" "}
            </Paper>
          </Grid>
        </Grid>

        <Grid container xs={12} sm={4} spacing={space}>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper} style={{ height: "50vh" }}>
              C
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper} style={{ height: "50vh" }}>
              D
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default React.memo(RedboxMessages);
