import React,{Component} from 'react'
import '../styleComponets/editors.css'



class Editor extends Component{

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    // Captura la imagen y le hace un substring, y la manda por la funcion que viene por props
    capturarImagen = (e)=>{
        e.preventDefault()
        let imagen = e.target.src.substring(21,e.target.src.length)
        
        this.props.seleccion(imagen)
    }

    render(){
        //mostrar las imagenes a traves de una array que contenga las imagenes
        

        return(
            <div className="editor">
                <div className="medidas">
                    {this.props.contenido}
                </div>
                <div className="imagenes">
                
                {
                    this.props.imagen.map((imagen)=>(
                            <div className="card">
                                <a href="funciona"><img src={imagen} alt="imagen" onClick={(e)=>{this.capturarImagen(e)}}/></a>
                            </div>
                    ))
                }
                
                </div>                
            </div>
        )
    }

}

export default Editor
