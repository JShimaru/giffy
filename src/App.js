import './App.css';
import axios from 'axios';
import Layout from './components/Layout';
import GifsButton from './components/GifsButton';
import { GIF_URL } from './services/constants';
import { useState } from 'react';

function App() {
    const [needGifs, setNeedGifs] = useState("")

    async function loadGif(){
      await axios.get(GIF_URL).then(res => {
        setNeedGifs(res.data.data.images.original.mp4)
        console.log(needGifs)      
    })
  }

  async function render(){
    await loadGif()    
    return(
      <>
        <p>{needGifs}</p>
      </>
    )
  }


  return (
    <div className="App">
      <GifsButton homeGif={needGifs} onClick={render}/>
      <Layout randomGifs={needGifs} handleClick={render}/>
    </div>
  );
}

export default App;
