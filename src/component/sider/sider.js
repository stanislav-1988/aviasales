import classes from './sider.module.scss';
import * as action from '../../state/action';
import { connect } from 'react-redux';

function Sider({ inputAll, olState, inputNonStop, inputOne, inputTwo, inputThree }) {
  const { checkAll, checkNonStop, checkOne, checkTwo, checkThree } = olState;
  const inputCount = checkNonStop + checkOne + checkTwo + checkThree;
  const onClickAll = () => {
    if (checkAll) {
      inputAll();
      if (checkNonStop) inputNonStop();
      if (checkOne) inputOne();
      if (checkTwo) inputTwo();
      if (checkThree) inputThree();
    }
    if (!checkAll) {
      inputAll();
      if (!checkNonStop) inputNonStop();
      if (!checkOne) inputOne();
      if (!checkTwo) inputTwo();
      if (!checkThree) inputThree();
    }
  };

  if (inputCount < 4 && checkAll) {
    setTimeout(() => {
      inputAll();
    }, 10);
  }
  if (inputCount === 4 && !checkAll) {
    setTimeout(() => {
      inputAll();
    }, 10);
  }
  return (
    <div className={classes['sider-conteiner']}>
      <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <form>
        <ul>
          <li>
            <input checked={checkAll} onChange={onClickAll} id="input_all" type="checkbox" />
            <label htmlFor="input_all" className={classes.label}>
              Все
            </label>
          </li>
          <li>
            <input checked={checkNonStop} onChange={inputNonStop} id="input_0" type="checkbox" />
            <label htmlFor="input_0" className={classes.label}>
              Без пересадок
            </label>
          </li>
          <li>
            <input checked={checkOne} onChange={inputOne} id="input_1" type="checkbox" />
            <label htmlFor="input_1" className={classes.label}>
              1 пересадка
            </label>
          </li>
          <li>
            <input checked={checkTwo} onChange={inputTwo} id="input_2" type="checkbox" />
            <label htmlFor="input_2" className={classes.label}>
              2 пересадки
            </label>
          </li>
          <li>
            <input checked={checkThree} onChange={inputThree} id="input_3" type="checkbox" />
            <label htmlFor="input_3" className={classes.label}>
              3 пересадки
            </label>
          </li>
        </ul>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    olState: state,
  };
};

export default connect(mapStateToProps, action)(Sider);
