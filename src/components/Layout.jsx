import GiffyLogic from "./GiffyLogic"

function Layout(props){


    return(
        <div>
            <GiffyLogic moreGifs={props.randomGifs} />
        </div>
    )
}

export default Layout