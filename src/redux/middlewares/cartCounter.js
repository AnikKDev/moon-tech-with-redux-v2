import { ADD_TO_CART } from "../actionTypes/actionTypes";

// !creating a currying function
const cartCounter = (store) => (next) => (action) => {
  const state = store.getState();
  if (action.type === ADD_TO_CART) {
    const cart = state.product.cart;
    const newAction = {
      ...action,
      payload: {
        ...action.payload,
        cartPosition: cart.length,
      },
    };
    return next(newAction);
  }
  //   action er upor base kore bakigulo execute hobe tai amra action ke next er veto disi
  return next(action);
};
export default cartCounter;
