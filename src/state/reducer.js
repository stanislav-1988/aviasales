/* eslint-disable default-param-last */
const initialState = {
  continuation: false,
  checkAll: true,
  checkNonStop: true,
  checkOne: true,
  checkTwo: true,
  checkThree: true,
  cheapBut: false,
  quickBut: false,
  optimalBut: false,
  keySearch: 0,
  arrTicket: [],
  errors: false,
  cointTicket: 5,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'all') {
    return {
      ...state,
      checkAll: !state.checkAll,
      cheapBut: false,
      quickBut: false,
      optimalBut: false,
      cointTicket: 5,
    };
  }
  if (action.type === 'nonStop') {
    return {
      ...state,
      checkNonStop: !state.checkNonStop,
      cheapBut: false,
      quickBut: false,
      optimalBut: false,
      cointTicket: 5,
    };
  }
  if (action.type === 'one') {
    return {
      ...state,
      checkOne: !state.checkOne,
      cheapBut: false,
      quickBut: false,
      optimalBut: false,
      cointTicket: 5,
    };
  }
  if (action.type === 'two') {
    return {
      ...state,
      checkTwo: !state.checkTwo,
      cheapBut: false,
      quickBut: false,
      optimalBut: false,
      cointTicket: 5,
    };
  }
  if (action.type === 'three') {
    return {
      ...state,
      checkThree: !state.checkThree,
      cheapBut: false,
      quickBut: false,
      optimalBut: false,
      cointTicket: 5,
    };
  }
  if (action.type === 'cheap') {
    return {
      ...state,
      cheapBut: true,
      quickBut: false,
      optimalBut: false,
      cointTicket: 5,
    };
  }
  if (action.type === 'quick') {
    return {
      ...state,
      cheapBut: false,
      quickBut: true,
      optimalBut: false,
      cointTicket: 5,
    };
  }
  if (action.type === 'optimal') {
    return {
      ...state,
      cheapBut: false,
      quickBut: false,
      optimalBut: true,
      cointTicket: 5,
    };
  }
  if (action.type === 'swapKey') {
    return {
      ...state,
      keySearch: action.payload,
    };
  }
  if (action.type === 'searchArrTicket') {
    return {
      ...state,
      arrTicket: [...state.arrTicket, ...action.payload],
      continuation: action.continuation,
    };
  }
  if (action.type === 'cointTicket') {
    return {
      ...state,
      cointTicket: state.cointTicket + 5,
    };
  }
  if (action.type === 'error') {
    return {
      ...state,
      errors: true,
    };
  }
  return state;
};

export default reducer;
