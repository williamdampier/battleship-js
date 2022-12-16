const formattedNumber = (myNumber) => ('0' + myNumber).slice(-2);

const PlayerScore = ({ player, score }) => {
  return (
    <div className={`player-box ${player}-player`}>
      <h2>{score < 10 ? formattedNumber(score) : score}</h2>
      <hr />
      <h3>player {player === 'first' ? 1 : 2}</h3>
    </div>
  );
};

export default PlayerScore;
