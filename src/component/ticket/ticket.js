/* eslint-disable prefer-destructuring */
import classes from './ticket.module.scss';
import { addMinutes, getMinutes, getHours } from 'date-fns';

function Ticket({ infoTicket }) {
  const prise = infoTicket.price;
  const sitiThere = `${infoTicket.segments[0].origin}-${infoTicket.segments[0].destination}`;
  const sitiBack = `${infoTicket.segments[1].origin}-${infoTicket.segments[1].destination}`;
  const durationThere = infoTicket.segments[0].duration;
  const durationBack = infoTicket.segments[1].duration;
  const flightTimeThere = `${Math.floor(durationThere / 60)}ч ${durationThere - Math.floor(durationThere / 60) * 60}м`;
  const flightTimeBack = `${Math.floor(durationBack / 60)}ч ${durationBack - Math.floor(durationBack / 60) * 60}м`;
  const howManyTransfersThere = `${infoTicket.segments[0].stops.length} пересадки`;
  const howManyTransfersBack = `${infoTicket.segments[1].stops.length} пересадки`;
  const transferСitiesThereArr = infoTicket.segments[0].stops;

  let transferСitiesThere = '';
  if (transferСitiesThereArr.length) {
    transferСitiesThere = infoTicket.segments[0].stops[0];
    for (let i = 1; i < transferСitiesThereArr.length; i += 1) {
      transferСitiesThere += `, ${infoTicket.segments[0].stops[i]}`;
    }
  }
  const transferСitiesBackArr = infoTicket.segments[1].stops;

  let transferСitiesBack = '';
  if (transferСitiesBackArr.length) {
    transferСitiesBack = infoTicket.segments[1].stops[0];
    for (let i = 1; i < transferСitiesBackArr.length; i += 1) {
      transferСitiesBack += `, ${infoTicket.segments[1].stops[i]}`;
    }
  }
  const dateThere = new Date(infoTicket.segments[0].date);
  const dateBack = new Date(infoTicket.segments[1].date);
  const periodFlightTimeThere = `${getHours(dateThere).toString().padStart(2, '0')}:${getMinutes(dateThere)
    .toString()
    .padStart(2, '0')}-${getHours(addMinutes(dateThere, durationThere)).toString().padStart(2, '0')}:${getMinutes(
    addMinutes(dateThere, durationThere)
  )
    .toString()
    .padStart(2, '0')}`;

  const periodFlightTimeBack = `${getHours(dateBack).toString().padStart(2, '0')}:${getMinutes(dateBack)
    .toString()
    .padStart(2, '0')}-${getHours(addMinutes(dateBack, durationBack)).toString().padStart(2, '0')}:${getMinutes(
    addMinutes(dateBack, durationBack)
  )
    .toString()
    .padStart(2, '0')}`;

  return (
    <div className={classes.ticket}>
      <div className={classes['ticket-header']}>
        <span>{prise}</span>
        <img src={`http://pics.avs.io/99/36/${infoTicket.carrier}.png`} alt="logo compani" />
      </div>
      <div className={classes['return-flight']}>
        <div>
          <p className={classes.explanation}>{sitiThere}</p>
          <p className={classes.description}>{periodFlightTimeThere}</p>
        </div>
        <div>
          <p className={classes.explanation}>в пути</p>
          <p className={classes.description}>{flightTimeThere}</p>
        </div>
        <div>
          <p className={classes.explanation}>{howManyTransfersThere}</p>
          <p className={classes.description}>{transferСitiesThere}</p>
        </div>
      </div>
      <div className={classes['return-flight-information']}>
        <div>
          <p className={classes.explanation}>{sitiBack}</p>
          <p className={classes.description}>{periodFlightTimeBack}</p>
        </div>
        <div>
          <p className={classes.explanation}>в пути</p>
          <p className={classes.description}>{flightTimeBack}</p>
        </div>
        <div>
          <p className={classes.explanation}>{howManyTransfersBack}</p>
          <p className={classes.description}>{transferСitiesBack}</p>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
