import React from 'react'
import './cityitem.scss'


function CitysItem({image, title, description}) {
  return (
    <div className='city'>
        <img src={image} alt={title} className="city__img" />
        <h2 className="city__title">{title}</h2>
        <div className="city__descr">{description}</div>
    </div>
  )
}

export default CitysItem