import { useState, useEffect } from "react";
import Setup from "./components/Setup";
import Punchline from "./components/Punchline";
import LetsHearAnother from "./components/LetsHearAnother";

import classes from "./App.module.css";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [joke, setJoke] = useState([]);
  const [anotherJoke, setAnotherJoke] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      if (!response.ok) {
        throw new Error("Something went wrong here!");
      }
      const data = await response.json();

      setJoke(data);
      console.log(data);
    };
    fetchData();
  }, [anotherJoke]);

  const clickHandler = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const anotherJokeClickHandler = () => {
    if (!anotherJoke) setAnotherJoke(true);
    else {
      setAnotherJoke(false);
    }
    setIsActive(false);
    console.log("click");
  };

  return (
    <div className={classes.app}>
      <Setup onClick={clickHandler} onLoad={joke.setup} />
      {isActive ? (
        <Punchline onLoad={joke.punchline} />
      ) : (
        <h1>Wait for it...</h1>
      )}
      <LetsHearAnother onClick={anotherJokeClickHandler} />
    </div>
  );
}

export default App;
