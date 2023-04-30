import classes from "./LetsHearAnother.module.css";

const LetsHearAnother = (props) => {
  return (
    <div>
      <button className={classes.neon__button} onClick={props.onClick}>
        <h3>When this gets clicked another joke is generated</h3>
      </button>
    </div>
  );
};

export default LetsHearAnother;
