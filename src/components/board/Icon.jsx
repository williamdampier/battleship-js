import React from 'react';
import HitIcon from './HitIcon';
import MissIcon from './MissIcon';

const Icon = ({ status }) => {
  return status === 'miss' ? <MissIcon /> : <HitIcon />;
};

export default Icon;
