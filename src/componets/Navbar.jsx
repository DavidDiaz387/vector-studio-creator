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
            imagen:[]
        }
    }

    // Funcion que se envia para saber que ventana mostrar (mostrar cuando la funcion se ejecuta "true")
    mostrarVentana = (titulo)=>{
        const animals = [
            "/vector-studio-creator/PHOTOS/Animals/(9).jpg",
            "/vector-studio-creator/PHOTOS/Animals/(10).jpg",
            "/vector-studio-creator/PHOTOS/Animals/(13).jpg",
            "/vector-studio-creator/PHOTOS/Animals/(14).jpg",
        ]

        const fruits = [
            "/vector-studio-creator/PHOTOS/Fruits/Cherry.jpg",
            "/vector-studio-creator/PHOTOS/Fruits/lima.jpg",
            "/vector-studio-creator/PHOTOS/Fruits/grape.jpg",
            "/vector-studio-creator/PHOTOS/Fruits/dradon.jpg",
        ]

        const city = [
            "/vector-studio-creator/PHOTOS/City/(1).jpg",
            "/vector-studio-creator/PHOTOS/City/(2).jpg",
            "/vector-studio-creator/PHOTOS/City/(3).jpg",
            "/vector-studio-creator/PHOTOS/City/(4).jpg",
        ]

        const human = [
            "/vector-studio-creator/PHOTOS/Human/EXPRESSION02.jpg",
            "/vector-studio-creator/PHOTOS/Human/EXPRESSION03.jpg",
            "/vector-studio-creator/PHOTOS/Human/EXPRESSION04.jpg",
            "/vector-studio-creator/PHOTOS/Human/EXPRESSION05.jpg",
        ]
        

        const array = [
            {
                name:"Upload",
                imagen:animals
            },
            {
                name:"Templates",
                imagen:fruits
            },
            {
                name:"Photo",
                imagen:city
            },
            {
                name:"Vectors",
                imagen:human
            }
        ]
        let imagen
        for (let i = 0; i < array.length; i++) {
             if(array[i].name === titulo){
                imagen = array[i].imagen
             }
        } 

        this.setState({
            bool:true,
            title:titulo,
            imagen:imagen
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
                {bool?<Editor imagen={this.state.imagen} seleccion={this.props.seleccion} contenido={this.state.title} />:<div></div>}
                    
            </div>
        )
    }
    
}

export default Navbar