const initialState = {
  loading: false,
  lst: [],
  error: "",
};

const SanPhamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SAN_PHAM":
      return { ...state, lst: action.payload };
    case "UPDATE_SAN_PHAM":
      return state;
    case "GET_ALL_SAN_PHAM":
      return { ...state, lst: action.payload };
    default:
      return state;
  }
};
export default SanPhamReducer;
