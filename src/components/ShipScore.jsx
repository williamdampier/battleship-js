import { config } from '../config';
import Ship from './Ship';

//TODO: UNPACK Shiptypes from config first!

const ShipScore = () => {
  return (
    <div>
      {ships.map((ship, index) => {
        //TODO: replace index swith something more appropriate!
        return <Ship key={index} ship={ship} />;
      })}
    </div>
  );
};

export default ShipScore;
