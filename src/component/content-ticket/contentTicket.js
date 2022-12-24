import classes from './contentTicket.component.scss';
import Loader from '../loader/loader';
import Ticket from '../ticket';
import OfError from '../error/error';
import * as action from '../../state/action';
import Service from '../../service/service';
import { connect } from 'react-redux';

function ContentTicket({ olState, searchArrTicket }) {
  const service = new Service();
  const {
    checkNonStop,
    checkOne,
    checkTwo,
    checkThree,
    cheapBut,
    quickBut,
    optimalBut,
    arrTicket,
    countTicket,
    errors,
    keySearch,
    continuation,
  } = olState;

  const gettingЕickets = () => {
    if (keySearch) {
      service.getTickets(keySearch).then(
        (el) => {
          searchArrTicket(el.tickets, el.stop);
        },
        () => {
          gettingЕickets();
        }
      );
    }
  };
  if (!continuation) {
    gettingЕickets();
  }

  let displayableArray = [];

  if (checkNonStop) {
    const array = arrTicket.filter((el) => {
      if (el.segments[0].stops.length === 0) {
        return true;
      }
      return false;
    });
    displayableArray = [...displayableArray, ...array];
  }
  if (checkOne) {
    const array = arrTicket.filter((el) => {
      if (el.segments[0].stops.length === 1) {
        return true;
      }
      return false;
    });
    displayableArray = [...displayableArray, ...array];
  }
  if (checkTwo) {
    const array = arrTicket.filter((el) => {
      if (el.segments[0].stops.length === 2) {
        return true;
      }
      return false;
    });
    displayableArray = [...displayableArray, ...array];
  }
  if (checkThree) {
    const array = arrTicket.filter((el) => {
      if (el.segments[0].stops.length === 3) {
        return true;
      }
      return false;
    });
    displayableArray = [...displayableArray, ...array];
  }
  if (cheapBut) {
    displayableArray.sort((a, b) => {
      return a.price - b.price;
    });
  }
  if (quickBut) {
    displayableArray.sort((a, b) => {
      return a.segments[0].duration - b.segments[0].duration;
    });
  }
  if (optimalBut) {
    const array = arrTicket.sort((a, b) => {
      return a.price - b.price;
    });
    array.filter((el) => {
      if (el.segments[0].stops.length === 0) {
        return true;
      }
      return false;
    });
    displayableArray = array.slice(0, 25);
    displayableArray.sort((a, b) => {
      return a.segments[0].duration - b.segments[0].duration;
    });
  }

  if (errors) {
    return <OfError />;
  }

  if (!arrTicket.length || !keySearch) {
    return <Loader />;
  }

  const newArr = [];
  displayableArray.every((element) => {
    if (newArr.length < countTicket) {
      newArr.push(element);
      return true;
    }
    return false;
  });

  if (newArr.length === 0) {
    return (
      <div id="no-flights" className={classes['no-flights']}>
        <span>Рейсов, подходящих под заданные фильтры, не найдено!!!</span>
      </div>
    );
  }

  let IdTicket = 0;
  const item = newArr.map((el) => {
    IdTicket += 1;
    return (
      <div key={IdTicket}>
        <Ticket infoTicket={el} />
      </div>
    );
  });
  return <div>{item}</div>;
}

const mapStateToProps = (state) => {
  return {
    olState: state,
  };
};

export default connect(mapStateToProps, action)(ContentTicket);
