import { useState } from 'react';
import './App.css';
import ListOfCharacters from './components/ListOfCharacters';

function App() {
  const [dato, setDato] = useState({
    name: '1',
    keyword: '1',
  })
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <input type='text' className='form-control mb-3' name='name' onChange={e => setDato({...dato, [e.target.name] : e.target.value})}/>

      <button className="btn btn-outline-secondary mb-3" onClick={() => setDato({...dato, keyword: dato.name })}>CLICK</button>
      {/* <button className="btn btn-outline-light mb-3" onClick={() => setDato(dato+1)}>ADD</button>
      <button className="btn btn-outline-info mb-3" onClick={() => setDato(1)}>RESET</button> */}
      <ListOfCharacters
        name={dato.keyword}
      />
      {/* <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">Cover</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </header> */}

      {/* <main className="px-3">
        <h1>Cover your page.</h1>
        <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p className="lead">
          <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
        </p>
      </main> */}

      {/* <footer className="mt-auto text-white-50">
        <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
      </footer> */}

    </div>
  );
}

export default App;