import React from 'react';
import PlayerScore from './PlayerScore';
import ShipScore from './ShipScore';

const ScoreBoard = ({ score }) => {
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
