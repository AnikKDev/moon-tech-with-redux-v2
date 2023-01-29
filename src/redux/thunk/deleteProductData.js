import axios from "axios";
import { deleteProduct } from "../actions/productAction";

export const deleteProductData = (id) => {
  return async (dispatch, getState) => {
    await axios.delete(`http://localhost:5000/product/${id}`).then((res) => {
      console.log(res);
      if (res.data.acknowledged) {
        dispatch(deleteProduct(id));
      }
    });
  };
};
