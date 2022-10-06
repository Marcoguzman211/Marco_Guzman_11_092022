import React from 'react';

const Rating = ({ rating }) => {
  const stars = [];
  const rate = parseInt(rating);
  for (let i = 0; i < 5; i++) {
    stars.push(
            <img
                src={i < rate ? '/assets/full-star.png' : '/assets/empty-star.png'}
                alt="full rating star"
                key={i}
                className="rating-star"
            />
    );
  }
  return <div className='rating-container'>{stars}</div>;
};

export default Rating;
