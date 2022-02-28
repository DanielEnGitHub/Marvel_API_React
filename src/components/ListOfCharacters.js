import React from 'react';
import Characters from '../components/Characters';
import getCharacters from '../services/getCharacters';
import {useState, useEffect} from 'react';

const ListOfCharacters = ({ limits=10 }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    getCharacters({limits}).then(res => setData(res));
  }, [limits])

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