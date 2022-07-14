import './App.css';
import Layout from './components/Layout';
import Gifs from './components/Gifs';
import { GIF_URL } from './services/constants';
import { useState } from 'react';

function App() {
    const [needGifs, setNeedGifs] = useState("")

    async function loadGif(){
      fetch(GIF_URL)
      .then(data => data.url)
      .then(data.url)
          
    
     }


  return (
    <div className="App">
      <Gifs Gif={needGifs} onClick={loadGif}/>
      <Layout randomGifs={needGifs} handleClick={loadGif}/>
    </div>
  );
}

export default App;
