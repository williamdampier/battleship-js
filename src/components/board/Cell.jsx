import { useState } from 'react';
import Icon from './Icon';

import { useDispatch } from 'react-redux';
import { increaseScore, scoreHit } from '../../store/reducers/PlayerScoreSlice';

const Cell = ({ content }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const checkContent = () => {
    if (!open) {
      if (content !== 'miss') {
        dispatch(increaseScore());
        dispatch(scoreHit(content));
      }
      setOpen(true);
    }
  };

  return (
    <div className='cell' onClick={() => checkContent()}>
      {open && <Icon status={content} />}
    </div>
  );
};

export default Cell;
