
function Layout(props){
    

console.log(props.needGifs)
    return(
        <div>
            <img src={props.needGifs} alt="no-gif"/>
        </div>
    )
}

export default Layout