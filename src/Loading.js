import React from 'react';
import loader from './assets/loader.gif';

const Loading = () => {
  return (
    <div className='loading'>
      <img
        src={loader}
        alt='Loading...'
        style={{ width: '20%', margin: 'auto' }}
      />
    </div>
  );
};

export default Loading;
