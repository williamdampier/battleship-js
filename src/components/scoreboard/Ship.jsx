import { useEffect, useState } from 'react';
import { shipImage } from '../../assets';
import Miss from './Miss';

const Ship = ({ name, size, count }) => {
  const [hits, setHits] = useState([]);
  console.log(name == 'crusier' && name);
  function initHits(size) {
    let tmpArr = [];
    if (size > 0) {
      for (let i = 0; i < size; i++) {
        tmpArr.push(<Miss key={i} />);
      }
      setHits(tmpArr);
    }
  }

  useEffect(() => {
    initHits(size);
  }, []);
  return (
    <div className='ship-box'>
      {name && <img src={shipImage[name]} alt={name} />}
      {hits && hits}
    </div>
  );
};

export default Ship;
