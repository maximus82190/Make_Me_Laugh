import { motion } from "framer-motion";
import classes from "./LetsHearAnother.module.css";

const LetsHearAnother = (props) => {
  return (
    <div onClick={props.onClick}>
      <motion.button
        className={classes.neon__button}
        //  whileHover={{ scale: 0.5 }}
        animate={{
          scale: [0.7, 0.9, 1],
          rotate: 720,
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        whileTap={{
          scale: [0.5, 1, 1.3, 1.5],
          rotate: [90, 180, 900, 720],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      >
        <h3>When this gets clicked another joke is generated</h3>
      </motion.button>
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
