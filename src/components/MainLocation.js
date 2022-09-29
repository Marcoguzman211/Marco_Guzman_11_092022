import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Rating from './Rating';
import Tags from './Tags';

const MainLocation = ({id}) => {
    const [logement, setLogement] = useState([]);
  useEffect(() => {
    axios.get("/logements.json").then((res) => {
        const logement = res.data.find((logement) => logement.id === id);
        setLogement(logement)
    });
  }, [id]);
  /* title, location, tags, host.name, host.picture */
  return (
    <div className='main-location-container'>
        <div className='main-location-header'>
            <h2 className='main-location-title'>{logement.title}</h2>
            <p className='main-location-lieu'>{logement.location}</p>
        </div>
        <div className='main-location-tags'>
            {logement.tags && logement.tags.map((tag) => {
                return <Tags key={tag} title={tag} />
            })}
        </div>
        <div className='main-location-section2'>
            <Rating rating={logement.rating}/>
            <div className='host'>
                {logement && <h3 className='host-name'>{logement.host.name}</h3>}
                <img className='host-picture' src={logement.host.picture} alt={logement.host.name} />
            </div>
        </div>

    </div>
  )
}

export default MainLocation