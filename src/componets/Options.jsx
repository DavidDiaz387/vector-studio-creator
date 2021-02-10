import React,{Component} from 'react'
import '../styleComponets/options.css'
import axios from 'axios'

class Options extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    
    getWindow(e){
        let titulo = this.props.name
        e.preventDefault()
        let imagen = this.getImages()
        e.target.parentElement.setAttribute("style","background-color:rgb(102,102,102)")
        console.log(e.target);
        this.props.funcion(titulo,imagen)
    }

    getImages = async ()=>{
        let imagen = await axios.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho")
        return imagen.data.data.url
    }

    render(){
        
        return(
            <React.Fragment>
            <li className="option"><a href="hola" onClick={(e)=>{this.getWindow(e)}}>{this.props.name}</a></li>
            </React.Fragment>
        )
    }

}

export default Options