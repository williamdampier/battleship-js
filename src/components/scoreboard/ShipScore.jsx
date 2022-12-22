import { useEffect } from 'react';
import Ship from './Ship';
import { useDispatch, useSelector } from 'react-redux';
import { initScoreboard } from '../../store/reducers/PlayerScoreSlice';

const ShipScore = () => {
  const dispatch = useDispatch();
  const { ships } = useSelector((state) => state.playerScore);

  useEffect(() => {
    dispatch(initScoreboard());
  }, []);

  return (
    <div className='ship-container'>
      {ships.map((ship) => {
        const { name, size } = ship;
        return <Ship key={name} size={size} name={name} />;
      })}
    </div>
  );
};

export default ShipScore;
