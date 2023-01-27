const initialState = {
  loading: false,
  lst: [],
  error: "",
};

const BillReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_Bill":
      return state;
    case "UPDATE_Bill":
      return state;
    case "GET_ALL_Bill":
      return { ...state, lst: action.payload };
    default:
      return state;
  }
};
export default BillReducer;
