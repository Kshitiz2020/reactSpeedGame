import Circle from "../UI_Components/Circle";

function Game({ score, circles, stopHandler, clickHandler, current }) {
  return (
    <div>
      <p>{score}</p>
      <div className="circles">
        {circles.map((_, i) => (
          <Circle
            key={i}
            clickHandler={clickHandler}
            current={current === i}
            id={i}
          /> // TODO :research how it came // check what is i
        ))}
      </div>
      <button onClick={stopHandler}>End game</button>
    </div>
  );
}

export default Game;

// Explain the Circle key and i thing.
