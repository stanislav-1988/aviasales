import classes from './foundTickets.module.scss';
import ContentTicket from '../content-ticket/contentTicket';
import * as action from '../../state/action';
import { connect } from 'react-redux';

function FoundTickets({ cheap, quick, optimal, addCointTicket, olState }) {
  const { cheapBut, quickBut, optimalBut, continuation } = olState;

  const loadTicket = continuation ? '' : 'loadTicket';
  const cheapClass = cheapBut ? 'button-selected-cheapClass' : 'cheapClass';
  const fastClass = quickBut ? 'button-selected-fastClass' : 'fastClass';
  const optimalClass = optimalBut ? 'button-selected-optimalClass' : 'optimalClass';
  return (
    <div className={classes['foundTickets-conteiner']}>
      <div className={classes['button-contenner']}>
        <button onClick={cheap} type="button" className={classes[`${cheapClass}`]}>
          САМЫЙ ДЕШЕВЫЙ
        </button>
        <button onClick={quick} type="button" className={classes[`${fastClass}`]}>
          САМЫЙ БЫСТРЫЙ
        </button>
        <button onClick={optimal} type="button" className={classes[`${optimalClass}`]}>
          ОПТИМАЛЬНЫЙ
        </button>
      </div>
      <div className={classes[`${loadTicket}`]}>
        <span className={classes.loader} />
      </div>
      <ContentTicket />
      <div>
        <button onClick={addCointTicket} className={classes['button-show-more']} type="button">
          Показать еще 5 билетов!
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    olState: state,
  };
};

export default connect(mapStateToProps, action)(FoundTickets);
