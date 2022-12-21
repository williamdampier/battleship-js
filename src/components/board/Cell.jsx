import { useState } from 'react';
import Icon from './Icon';

import { useDispatch } from 'react-redux';
import { increaseScore } from '../../store/reducers/PlayerScoreSlice';

const Cell = ({ content }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const checkContent = () => {
    setOpen(true);
    if (content !== 'miss') {
      dispatch(increaseScore());
    }
  };

  return (
    <div className='cell' onClick={() => checkContent()}>
      {open && <Icon status={content} />}
    </div>
  );
};

export default Cell;
