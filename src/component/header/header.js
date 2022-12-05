import classes from './header.module.scss';

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes['logo-header']} />
    </div>
  );
}

export default Header;
