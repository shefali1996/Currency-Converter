const initialState = {
  rates: [],
  status:0
};

const ConvertReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONVERT_SUCCESS":
      return {
        ...state,
        rates: action.payload.data.rates,
        status:action.payload.status
      };
      default:
  }
  return state;
};

export default ConvertReducer;
