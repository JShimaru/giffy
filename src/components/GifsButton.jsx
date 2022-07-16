
function GifsButton(props){

    const homeGif = props.homeGif

    return(
        <div>
            <h1>Want a gif?</h1>
            <p><img src="{homeGif}" /></p>
            <button className="moreGifs" onClick={props.onClick}>Show More...</button>
        </div>
    )
}

export default GifsButton