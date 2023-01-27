const initialState = {
  lst: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_Cart":
      console.log(state.lst)
      return { lst : [...state.lst , action.payload]};
    case "UPDATE_Cart":
      console.log(action.payload)
      return {
        lst: action.payload
      };
    case "GET_ALL_Cart":
      return { ...state, lst: action.payload };
    default:
      return state;
  }
};
export default CartReducer;
