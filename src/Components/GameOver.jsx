function GameOver({ closeHandler, name, score, level }) {
  return (
    <div className="overlay">
      <div className="gameover_box">
        <h2>GAME OVER</h2>
        <div className="game_data">
          <p>{name}</p>
          <p className="score">{score}</p>
          <p>{level}</p>
        </div>
        <p>Practice more</p>
        <button onClick={closeHandler}>X</button>
      </div>
    </div>
  );
}

export default GameOver;
