import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({title, image, id}) => {
  return (
    <NavLink to={"/logement/"+id}>
      <div className='card-container'>
        <h3>{title}</h3>
        <img src={image} alt={title} />
      </div>
    </NavLink>
  )
}

export default Card