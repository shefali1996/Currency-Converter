const initialState = {
  rates: []
};

const ConvertReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONVERT_SUCCESS":
      return {
        ...state,
        rates: action.payload
      };
      default:
  }
  return state;
};

export default ConvertReducer;
