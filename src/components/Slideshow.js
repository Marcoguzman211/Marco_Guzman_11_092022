import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import data from '../data/logements.json';

const Slideshow = ({ id }) => {
  const [actualPictureIndex, setActualPictureIndex] = useState(0);
  const logement = data.find(logement => logement.id === id);

  if ((logement === undefined)) {
    return <Navigate to='/error404'/>;
  } else {
    const pictures = logement.pictures;
    const nextPicture = () => {
      if (actualPictureIndex >= pictures.length - 1) {
        setActualPictureIndex(0);
      } else {
        setActualPictureIndex(actualPictureIndex + 1);
      }
    };
    const previousPicture = () => {
      if (actualPictureIndex === pictures.length - pictures.length) {
        setActualPictureIndex(pictures.length - 1);
      } else {
        setActualPictureIndex(actualPictureIndex - 1);
      }
    };
    return (
    <div className='slideshow-container'>
        <img className="slideshow-mainPicture"src={pictures[actualPictureIndex]} alt="banner slidewshow"/>
        {pictures.length > 1 && <img className="slideshow-arrow-right" src={'/assets/arrow-right.png'} alt="arrow right" onClick={nextPicture}/>}
        {pictures.length > 1 && <img className="slideshow-arrow-left" src={'/assets/arrow-left.png'} alt="arrow left" onClick={previousPicture}/>}
    </div>
    );
  }
};

export default Slideshow;
