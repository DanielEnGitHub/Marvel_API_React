import React from 'react'

const Characters = ({ id, name, path, extension }) => {
  return (
    <div>
        <h3>{name}</h3>
        <img alt={name} className='portada' src={path+'.'+extension}/>
    </div>
  )
}

export default Characters