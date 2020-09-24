import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { db } from '../../firebase';
import { Remove, Add } from '@material-ui/icons';
import CustomerNav from './CustomerNav';
import firebase from 'firebase';
import { Typography } from '@material-ui/core';
import Fastfood from '@material-ui/icons/Fastfood';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    justifyItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 50,
    width: 150,
  },
  Bookpaper: {
    justifyItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 200,
  },
  add_remove: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 30,
    width: 50,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Book({ user, setUser }) {
  const [cartItems, setCartItems] = useState([]);
  const [menu, setMenu] = useState([]);
  const classes = useStyles();

  let [count, setCount] = useState(0);

  useEffect(() => {
    db.collection('items').onSnapshot((snapshot) => {
      setMenu(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, []);

  const addItem = ({ id, item }) => {
    if (cartItems.filter((item) => item.itemName === id).length === 0) {
      setCartItems((prevArray) =>
        prevArray.concat({ itemName: id, qty: 1, price: item.price })
      );
    } else {
      let index = cartItems.findIndex((obj) => obj.itemName === id);
      console.log(index);
      cartItems[index].qty += 1;
      cartItems[index].price += item.price;
    }
    setCount(count + item.price);
  };
  const removeItem = ({ id, item }) => {
    let index = cartItems.findIndex((obj) => obj.itemName === id);
    console.log(index);
    if (index > 0 && cartItems[index].qty > 0) {
      cartItems[index].qty -= 1;
      cartItems[index].price -= item.price;
      if (cartItems[index].qty === 0) {
        cartItems.splice(index, 1);
      }
    }

    setCount(count - item.price);
  };
  function booking() {
    db.collection('orders').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      name: user.displayName,
      email: user.email,
      orderItems: cartItems,
      status: 'Pending',
      awaitStatus: 'Receive',
      totalAmount: count,
    });
    setCount(0);
    setCartItems([]);
  }
  return (
    <div>
      <CustomerNav setUser={setUser} />
      {menu.map(({ id, item }) => (
        <center>
          <div>
            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                <Grid container justify='center' spacing={1}>
                  <Grid item>
                    <Paper alignItems='center' className={classes.add_remove}>
                      <center>
                        <Remove onClick={() => removeItem({ id, item })} />
                      </center>
                    </Paper>
                  </Grid>
                  <Grid item>
                    <Paper className={classes.paper}>
                      <Grid item alignItems='center'>
                        {id}
                        <br />
                        {item.price}/-
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item>
                    <Paper alignItems='center' className={classes.add_remove}>
                      <center>
                        <Add
                          onClick={() => {
                            addItem({ id, item });
                          }}
                        />
                      </center>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </center>
      ))}
      <center>
        <div>
          <h6>Your Meal</h6>
          <Paper className={classes.Bookpaper}>
            {cartItems.map((item) => (
              <Typography variant='body1'>
                {item.itemName} Qty - {item.qty}
              </Typography>
            ))}
          </Paper>
          <br />
          <Fastfood
            onClick={() => {
              booking();
            }}
          />
        </div>
      </center>
    </div>
  );
}

export default Book;
