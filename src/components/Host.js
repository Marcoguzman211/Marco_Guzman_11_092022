import React from 'react';

const Host = ({ name, picture }) => {
  return (
    <div className='host'>
        <h3 className='host-name'>{name}</h3>
        <img className='host-picture' src={picture} alt={name} />
    </div>
  );
};

export default Host;
