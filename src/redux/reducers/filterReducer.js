import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

const initialState = {
  filters: {
    brands: [],
    stock: false,
  },
  keyword: "",
};
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BRAND:
      // handle the data in mmutated way
      return {
        ...state,
        filters: {
          ...state.filters,
          brands: [...state.filters.brands, action.payload],
        },
      };
    case TOGGLE_STOCK:
      return {};
    default:
      return state;
  }
};

export default filterReducer;
