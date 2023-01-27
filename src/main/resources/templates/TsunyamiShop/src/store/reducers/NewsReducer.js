const initialState = {
    loading: false,
    lst: [],
    error: "",
  };
  
  const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_News":
        return state;
      case "UPDATE_News":
        return state;
      case "GET_ALL_News":
        return { ...state, lst: action.payload };
      default:
        return state;
    }
  };
  export default NewsReducer;