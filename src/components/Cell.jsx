import React from 'react';
import Icon from './Icon';

const Cell = ({ id, status }) => {
  return (
    <div className='cell' onClick={() => console.log(id)}>
      {status !== 'empty' && <Icon status={status} />}
    </div>
  );
};

export default Cell;
