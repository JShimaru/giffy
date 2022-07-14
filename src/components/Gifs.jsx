import { GIF_URL } from "../services/constants"


function Gifs(props){

    return(
        <div>
            <h1>{props.Gifs}</h1>
            <button className="moreGifs" onClick={props.onClick}>Show More...</button>
        </div>
    )
}

export default Gifs