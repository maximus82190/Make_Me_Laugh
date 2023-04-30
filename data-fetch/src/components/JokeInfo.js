import { useState, useEffect } from "react";

const JokeInfo = () => {
  const [joke, setJoke] = useState([]);

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
  }, []);

  return (
    <>
      <div>{joke.setup}</div>
      <div>{joke.punchline}</div>
      <h1>This is joke data</h1>;
    </>
  );
};
export default JokeInfo;
