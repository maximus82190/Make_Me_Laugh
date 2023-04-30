import classes from "./Setup.module.css";

const Setup = (props) => {
  //  const buttonPressHandler = (props) => {
  //    props.onClick(event.target.value);
  //  };

  return (
    <div className={classes.setup}>
      <button className={classes.button} onClick={props.onClick}>
        <h1> {props.onLoad} </h1>
        <h3>Click to see the answer</h3>
      </button>
    </div>
  );
};

export default Setup;
