import { combineReducers } from "redux";
import DongSpReducer from "./reducers/DongSpReducer";
import SanPhamReducer from "./reducers/SanPhamReducer";
import UserReducer from "./reducers/UserReducer";
import BillReducer from "./reducers/BillReducer";
import NewsReducer from "./reducers/NewsReducer";
import CartReducer from "./reducers/CartReducer";
import LoginReducer from "./reducers/LoginReducer";

const rootReducer = combineReducers({
  dongSp: DongSpReducer,
  sanPham: SanPhamReducer,
  user: UserReducer,
  bill: BillReducer,
  cart: CartReducer,
  news: NewsReducer,
  login: LoginReducer
});
export default rootReducer;
