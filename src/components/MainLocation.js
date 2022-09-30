import React from 'react'
import Rating from './Rating';
import Tags from './Tags';
import logements from "../data/logements.json"
import Host from './Host';
import Collapse from './Collapse';

const MainLocation = ({id}) => {
    const logement = logements.find(apartment => apartment.id === id)
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
            <Host name={logement.host.name} picture={logement.host.picture}/>
        </div>
        <div className='main-location-collapses'>
            <Collapse initialOpened={true} title={'Description'} text={logement.description}/>
            <Collapse initialOpened={true} title={'Équipements'} text={logement.equipments}/>
        </div>

    </div>
  )
}

export default MainLocation