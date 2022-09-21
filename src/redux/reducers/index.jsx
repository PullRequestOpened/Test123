import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";

export const allReducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
