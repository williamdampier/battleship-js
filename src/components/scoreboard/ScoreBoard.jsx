import React from 'react';
import { useSelector } from 'react-redux';
import PlayerScore from './PlayerScore';
import ShipScore from './ShipScore';

const ScoreBoard = () => {
  const { score } = useSelector((state) => state.playerScore);
  return (
    <div className='scoreboard'>
      <div className='player-board'>
        <PlayerScore player='first' score={score} />
        <PlayerScore player='second' score={0} />
      </div>
      <ShipScore />
    </div>
  );
};

export default ScoreBoard;
