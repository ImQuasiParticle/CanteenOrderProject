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
let object = [];
export default function Order(props) {
  const classes = useStyles();
  const [foodEle, setFoodEle] = useState([]);
  useEffect(() => {
    object = JSON.parse(JSON.stringify(props.order.orderItems));
    console.log(object);
  }, []);

  // function getData(item) {
  //   var fullname = [item.itemName, item.].join(" ");
  //   return fullname;
  // }
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
  //   db.collection("orders").doc(props.orderId).update({
  //     status: "Received",
  //   });
  //   console.log("statusButton");
  // }

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
                <Typography variant="h6" gutterBottom>
                  {JSON.stringify(props.order.orderItems)}
                  {/* {props.order.orderItems.map((item) => {
                    item.itemName;
                  })} */}
                </Typography>
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
          <Grid item>{statusButton()}</Grid>
        </Grid>
      </Paper>
    </div>
  );
}
