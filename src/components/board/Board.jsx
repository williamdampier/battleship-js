import { config } from '../../config';
import { useEffect, useState } from 'react';
import Cell from './Cell';

const Board = () => {
  const [cells, setCells] = useState([]);

  const checkHit = (x, y) => {
    console.log(`func coordinates ${x} ${y}`);
    for (let i = 0; i < config.layout.length; i++) {
      for (let j = 0; j < config.layout[i].positions.length; j++) {
        if (
          config.layout[i].positions[j][0] === x &&
          config.layout[i].positions[j][1] === y
        ) {
          return { ship: config.layout[i].ship, content: 'hit' };
        }
      }
    }
    return { ship: 'none', content: 'miss' };
  };

  console.log(checkHit(2, 9));

  const fillBoard = (cells) => {
    let tmpArr = [];
    if (cells.length < 1) {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          const id = (i + 1).toString().concat((j + 1).toString());
          const content = checkHit(i + 1, j + 1);
          tmpArr.push({ id, content });
        }
      }
      setCells(tmpArr);
    }
  };

  useEffect(() => {
    fillBoard(cells);
  }, []);

  return (
    <div className='board'>
      {cells.map((item) => {
        return (
          <Cell
            key={item.id}
            id={item.id}
            status='empty'
            content={item.content}
          />
        );
      })}
    </div>
  );
};

export default Board;
