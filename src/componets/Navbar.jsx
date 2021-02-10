import React,{Component} from 'react'
import Options from './Options'
import Editor from './Editors'
import '../styleComponets/navbar.css'


class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = {
            bool : false,
            title:"",
            image:""
        }
    }

    mostrarVentana = (titulo,imagen)=>{
        this.setState({
            bool:true,
            title:titulo,
            image:imagen
        })

    }


    render(){
        let {bool} = this.state
        return(
            <div className="navEdition">
                <ul className="navbar">
                    <Options name="New Project" funcion={this.mostrarVentana}/>
                    <Options name="Upload" funcion={this.mostrarVentana}/>
                    <Options name="Templates" funcion={this.mostrarVentana}/>
                    <Options name="Photo" funcion={this.mostrarVentana}/>
                    <Options name="Vectors" funcion={this.mostrarVentana}/>
                    <Options name="Effects" funcion={this.mostrarVentana}/>
                    <Options name="Sound" funcion={this.mostrarVentana}/>
                    <Options name="Video" funcion={this.mostrarVentana}/>
                    <Options name="Font" funcion={this.mostrarVentana}/>
                </ul>
                {bool?<Editor imagen={this.state.image} contenido={this.state.title}/>:<div></div>}
                
                
            </div>
        )
    }
    
}

export default Navbar