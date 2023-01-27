
const initialState = {
  loading: false,
  lst: [],
  error: "",
};

// const currentPromise = new Promise((resolve, reject) => {
//   try {
//     const data = axios.get("https://6348f539a59874146b14659c.mockapi.io/cart").then((response) =>{return response.data});
//     resolve(data);
//   } catch (e) {
//     reject(e.message);
//   }
// });

// currentPromise
//   .then((data) => {
//     initialState.lst =data
//     console.log("a")
//   })
//   .catch((e) => {
//     console.log("error");
//   });

const DongSpReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "ADD_DONGSP":
      return state;
    case "UPDATE_DONGSP":
      return state;
    case "GET_ALL_DONGSP":
      return {...state,lst:action.payload};
    default:
      return state;
  }
};
export default DongSpReducer;
