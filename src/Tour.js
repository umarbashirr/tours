import React, { useState } from 'react';

const Tour = ({ id, name, price, image, info, tours, setTours }) => {
  const [readMore, setReadMore] = useState(false);

  const newTours = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <div className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? 'show less' : 'show more'}
          </button>
        </p>
        <button
          className='delete-btn'
          onClick={() => {
            newTours(id);
          }}
        >
          Not Interested
        </button>
      </footer>
    </div>
  );
};

export default Tour;
