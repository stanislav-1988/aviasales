/* eslint-disable prettier/prettier */
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
  countTicket: 5,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'all':
    return {
      ...state,
      checkAll: !state.checkAll,
      cheapBut: false,
      quickBut: false,
      optimalBut: false,
      countTicket: 5,
    };
  case 'nonStop':
    return {
      ...state,
      checkNonStop: !state.checkNonStop,
      cheapBut: false,
      quickBut: false,
      optimalBut: false,
      countTicket: 5,
    };
  case 'one':
    return {
      ...state,
      checkOne: !state.checkOne,
      cheapBut: false,
      quickBut: false,
      optimalBut: false,
      countTicket: 5,
    };
  case 'two':
    return {
      ...state,
      checkTwo: !state.checkTwo,
      cheapBut: false,
      quickBut: false,
      optimalBut: false,
      countTicket: 5,
    };
  case 'three':
    return {
      ...state,
      checkThree: !state.checkThree,
      cheapBut: false,
      quickBut: false,
      optimalBut: false,
      countTicket: 5,
    };
  case 'cheap':
    return {
      ...state,
      cheapBut: true,
      quickBut: false,
      optimalBut: false,
      countTicket: 5,
    };
  case 'quick':
    return {
      ...state,
      cheapBut: false,
      quickBut: true,
      optimalBut: false,
      countTicket: 5,
    };
  case 'optimal':
    return {
      ...state,
      cheapBut: false,
      quickBut: false,
      optimalBut: true,
      countTicket: 5,
    };
  case 'swapKey':
    return  {
      ...state,
      keySearch: action.payload,
    };
  case 'searchArrTicket':
    return {
      ...state,
      arrTicket: [...state.arrTicket, ...action.payload],
      continuation: action.continuation,
    };
  case 'countTicket':
    return {
      ...state,
      countTicket: state.countTicket + 5,
    };
  case 'error':
    return {
      ...state,
      errors: true,
    };
  default:
    return state;
  }
};

export default reducer;
