import React from 'react';
import HitIcon from './HitIcon';
import MissIcon from './MissIcon';

const Icon = ({ status }) => {
  return <>{status === 'hit' ? <HitIcon /> : <MissIcon />}</>;
};

export default Icon;