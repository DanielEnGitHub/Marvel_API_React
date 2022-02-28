import React from 'react';
import Characters from '../components/Characters';
import getCharacters from '../services/getCharacters';
import {useState, useEffect} from 'react';

const ListOfCharacters = ({ name='capitan' }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    getCharacters({name}).then(res => setData(res));
  }, [name])

  return (
    <section className='app-content'>
        {
          data.map(res => 
            <Characters
                key={res.id}
                id={res.id}
                name={res.name}
                path={res.path}
                extension={res.extension}
            />
          )
        }
      </section>
  )
}

export default ListOfCharacters