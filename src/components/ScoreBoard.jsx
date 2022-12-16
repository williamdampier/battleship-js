import React from 'react';
import PlayerScore from './PlayerScore';
import ShipScore from './ShipScore';

const ScoreBoard = () => {
  return (
    <div className='scoreboard'>
      <div className='player-board'>
        <PlayerScore player='first' score={0} />
        <PlayerScore player='second' score={0} />
      </div>
      <ShipScore />
    </div>
  );
};

export default ScoreBoard;
