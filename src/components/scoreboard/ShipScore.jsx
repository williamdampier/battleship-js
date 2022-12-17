import { config } from '../../config';
import Ship from './Ship';

//TODO: replace to redux later
const ships = Object.entries(config.shiptypes);

const ShipScore = () => {
  return (
    <div className='ship-container'>
      {ships.map((ship) => {
        const [name, values] = ship;
        return <Ship key={name} {...values} name={name} />;
      })}
    </div>
  );
};

export default ShipScore;
