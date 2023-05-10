import { useState } from "react";
import "./LetsHearAnother.css";

const LetsHearAnother = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    if (!isClicked) {
      setIsClicked(true);
      props.onClick();
      setTimeout(() => {
        setIsClicked(false);
        console.log("reset timer");
      }, "5000");
    } else {
      return;
    }
  };

  const buttonClassName = isClicked ? "neon__button active" : "neon__button";

  return (
    <div className>
      <button className={buttonClassName} onClick={clickHandler}>
        <h3>When this gets clicked another joke is generated</h3>
      </button>
    </div>
  );
};

export default LetsHearAnother;

//  whileHover={{ scale: 0.5 }}
//animate={{
//    scale: [0.7, 0.9, 1],
//    rotate: 720,
//    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
//  }}
//  whileTap={{
//    scale: [0.5, 1, 1.3, 1.5],
//    rotate: [90, 180, 900, 720],
//    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
//  }}
