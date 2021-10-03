import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, setTours }) => {
  return (
    <main>
      <section>
        <div className='title'>
          <h2>Our Tours</h2>
          <div className='underline'></div>
        </div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} tours={tours} setTours={setTours} />
        ))}
      </section>
    </main>
  );
};

export default Tours;
