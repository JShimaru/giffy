
function GifsButton(props){

    return(
        <div>
            <h1>Want a gif?</h1>
                <div>
                    <img src={props.homeGif} alt=""/>
                </div>
            <button className="moreGifs" onClick={props.onClick}>Show More...</button>
        </div>
    )
}

export default GifsButton