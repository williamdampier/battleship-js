import { shipImage } from '../../assets';
import Miss from './Miss';
import Hit from './Hit';

const Ship = ({ name, size }) => {
  return (
    <div className='ship-box'>
      {name && <img className='ship-image' src={shipImage[name]} alt={name} />}
      <div className='hit-box'>
        {size.map((hitbox, index) => {
          return hitbox === 'plus' ? <Miss key={index} /> : <Hit key={index} />;
        })}
      </div>
    </div>
  );
};

export default Ship;
