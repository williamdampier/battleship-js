import { useState } from 'react';
import Icon from './Icon';

const Cell = ({ id, status, content }) => {
  const [open, setOpen] = useState(false);

  const checkContent = () => {
    setOpen(true);
    console.log(content.ship + ' ' + id);
  };
  return (
    <div className='cell' onClick={() => checkContent()}>
      {open ? <Icon status={content.content} /> : <Icon status={status} />}
    </div>
  );
};

export default Cell;
