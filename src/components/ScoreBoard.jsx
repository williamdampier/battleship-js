import React from 'react';
import PlayerScore from './PlayerScore';

const ScoreBoard = () => {
  return (
    <div className='scoreboard'>
      <div className='player-board'>
        <PlayerScore player='first' score={0} />
        <PlayerScore player='second' score={0} />
      </div>
    </div>
  );
};

export default ScoreBoard;
