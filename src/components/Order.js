import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    margin: "auto",
    marginTop: 10,
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  Pending: {
    color: "#ff0000",
  },
  statusButton: {
    width: "auto",
  },
}));
export default function Order(props) {
  const classes = useStyles();
  function statusButton() {
    if (props.order.awaitStatus !== "Complete") {
      return (
        <Button
          className="statusButton"
          onClick={() => {
            props.statusButton(props.orderId);
          }}
        >
          {props.order.awaitStatus}
        </Button>
      );
    } else {
      return null;
    }
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h6">
                  {props.order.name}
                </Typography>
                {props.order.orderItems.map((element) => {
                  return (
                    <Typography display="block" variant="body2" gutterBottom>
                      {element.itemName} Qty - {element.qty}
                    </Typography>
                  );
                })}

                <Typography variant="body2" color="textSecondary">
                  ID: {props.orderId}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Rs {props.order.totalAmount} /-
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          spacing={2}
          alignItems="center"
        >
          <Grid item>
            <Typography className={props.order.status} variant="body2">
              STATUS : {props.order.status}
            </Typography>
          </Grid>
          {!props.user ? <Grid item>{statusButton()}</Grid> : null}
        </Grid>
      </Paper>
    </div>
  );
}
