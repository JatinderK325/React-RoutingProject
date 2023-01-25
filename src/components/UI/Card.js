import classes from './Card.module.css';
// component
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
