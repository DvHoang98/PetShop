const initialState = {
    loading: false,
    lst: null,
    error: "",
  };
  
  const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_CURRENT_USER":
        return state;
      case "LOGIN_USER":
        return { ...state, lst: action.payload };
      case "LOGOUT_USER":
        return initialState;
      default:
        return state;
    }
  };
  export default LoginReducer;
  