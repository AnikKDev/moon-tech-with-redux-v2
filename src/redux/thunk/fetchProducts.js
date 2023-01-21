import axios from "axios";
import { loadProduct } from "../actions/productAction";

// --> we will return an anonymous function while using thunk
export const loadProductData = () => {
  // params sequence is dispatch first then action

  /* 
  .get("http://localhost:5000/products")
      .then((res) => console.log(res.data.data));
  */
  return (dispatch, getState) => {
    // now render the data
    const res = axios
      .get("http://localhost:5000/products")
      .then((res) => dispatch(loadProduct(res.data.data)));
  };
};
