import classes from './app.module.scss';
import Header from '../header';
import Sider from '../sider';
import FoundTickets from '../found-tickets';
import * as action from '../../state/action';
import { useEffect } from 'react';
import { connect } from 'react-redux';

function App({ receivingKey }) {
  useEffect(() => {
    return receivingKey();
  }, [receivingKey]);
  return (
    <div className={classes.body}>
      <Header />
      <div className={classes.main}>
        <Sider />
        <FoundTickets />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    olState: state,
  };
};

export default connect(mapStateToProps, action)(App);
