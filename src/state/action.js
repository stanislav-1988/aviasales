import SwapiSerwer from '../swapi-server/swapiSerwer';

const swapi = new SwapiSerwer();

export const inputAll = () => ({ type: 'all' });
export const inputNonStop = () => ({ type: 'nonStop' });
export const inputZero = () => ({ type: 'zero' });
export const inputOne = () => ({ type: 'one' });
export const inputTwo = () => ({ type: 'two' });
export const inputThree = () => ({ type: 'three' });
export const cheap = () => ({ type: 'cheap' });
export const quick = () => ({ type: 'quick' });
export const optimal = () => ({ type: 'optimal' });
export const addCointTicket = () => ({ type: 'cointTicket' });
export const error = () => ({ type: 'error' });
export const searchArrTicket = (payload, continuation) => ({ type: 'searchArrTicket', payload, continuation });
export const swapKey = (payload) => ({ type: 'swapKey', payload });

export const receivingKey = () => {
  return (dispatch) => {
    swapi.searchId().then(
      (el) => {
        dispatch(swapKey(el.searchId));
      },
      () => {
        dispatch(error());
      }
    );
  };
};
