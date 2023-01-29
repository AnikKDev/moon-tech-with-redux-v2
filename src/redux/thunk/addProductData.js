import axios from "axios";
import { addProduct } from "../actions/productAction";

export const addProductData = (data) => {
  return async (dispatch, getState) => {
    await axios.post("http://localhost:5000/product", data).then((res) => {
      if (res.data.acknowledged) {
        dispatch(
          addProduct({
            _id: res.insertedId,
            ...data,
          })
        );
        console.log(res);
      }
    });
  };
};
