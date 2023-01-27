const initialState = {
  loading: false,
  lst: [],
  error: "",
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_User":
      return state;
    case "UPDATE_User":
      return state;
    case "GET_ALL_User":
      return { ...state, lst: action.payload };
    default:
      return state;
  }
};
export default UserReducer;
