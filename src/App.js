import './App.css';
import Layout from './components/Layout';
import GifsButton from './components/GifsButton';
import { GIF_URL } from './services/constants';
import { useState } from 'react';

function App() {
    const [needGifs, setNeedGifs] = useState("")

    async function loadGif(){
      let url = fetch(GIF_URL)
      console.log(url)
      .catch(err => {
        console.log(err)
      })
    
     }


  return (
    <div className="App">
      <GifsButton homeGif={needGifs} onClick={loadGif}/>
      <Layout randomGifs={needGifs} handleClick={loadGif}/>
    </div>
  );
}

export default App;
