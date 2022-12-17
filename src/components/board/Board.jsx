import { config } from '../../config';
import { useEffect, useState } from 'react';
import Cell from './Cell';

const Board = () => {
  const [cells, setCells] = useState([]);

  function fillBoard(cells) {
    let tmpArr = [];
    if (cells.length < 1) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          const id = i.toString().concat(j.toString());
          tmpArr.push({ id, content: 'empty' });
        }
      }
      setCells(tmpArr);
    }
  }

  useEffect(() => {
    fillBoard(cells);
  }, []);

  return (
    <div className='board'>
      {cells.map((item) => {
        return <Cell key={item.id} id={item.id} status='hit' />;
      })}
    </div>
  );
};

export default Board;