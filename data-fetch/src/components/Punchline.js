import classes from "./Punchline.module.css";

const Punchline = (props) => {
  return (
    <div className={classes.punchline}>
      <div>
        <h2>{props.onLoad}</h2>
      </div>
    </div>
  );
};

export default Punchline;
