import { useState } from "react";
import NewGame from "./Components/NewGame";
import Game from "./Components/Game";
import Circle from "./UI_components/Circle";
import { levels } from "./levels";

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);

  const gameSetHandler = (level, name) => {
    const levelIndex = levels.findIndex((el) => el.name === level);

    const levelAmount = level[levelIndex].amount;

    //console.log("about of circles", levelAmount);

    const circlesArray = Array.from(
      { length: levels[levelIndex].amount },
      (x, i) => i
    );
    //console.log("circlesArray", circlesArray);

    //based on level , we find the matching object from levels array , and then make a array for the circles, with amount in the the object.
    setCircles(circlesArray);

    setPlayer({
      level: level,
      name: name,
    });
  };
  //console.log(player);
  return (
    <>
      <h1>Catch the snow!!!</h1>
      <NewGame onclick={gameSetHandler} />

      <Game score={score} circles={circles} />
    </>
  );
}

export default App;
