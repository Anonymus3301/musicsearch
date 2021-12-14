const initialState = "";

//Reducer
const changeSearch = (state = initialState, action) => {
  switch (action.type) {
    case "search": {
      state = action.payload;
      return state;
    }
    default:
      return state;
  }
};
export default changeSearch;
