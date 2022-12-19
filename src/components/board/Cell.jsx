import { useState } from 'react';
import Icon from './Icon';

const Cell = ({ id, status, content, increaseScore }) => {
  const [open, setOpen] = useState(false);

  const checkContent = () => {
    setOpen(true);
    if (content.ship !== 'none') {
      increaseScore();
    }
  };
  return (
    <div className='cell' onClick={() => checkContent()}>
      {open ? <Icon status={content.content} /> : <Icon status={status} />}
    </div>
  );
};

export default Cell;
