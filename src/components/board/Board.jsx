import Cell from './Cell';
import { useSelector } from 'react-redux';

const Board = () => {
  const cells = useSelector((state) => state.game.layout);

  return (
    <div className='board'>
      {cells.map((item, i) => {
        return <Cell key={i} content={item} />;
      })}
    </div>
  );
};

export default Board;
