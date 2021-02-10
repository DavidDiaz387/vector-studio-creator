import React,{Component} from 'react'
import '../styleComponets/editors.css'


class Editor extends Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        //mostrar las imagenes a traves de una array que contenga las imagenes
        return(
            <div className="editor">
                <div className="medidas">
                    {this.props.contenido}
                </div>
                <div className="imagenes">
                    <div className="card">
                        <img src="" alt="imagen"/>
                    </div>
                    <div className="card">
                        <img src="" alt=""/>
                    </div>
                </div>
                <div className="imagenes">
                    <div className="card">
                        <img src="" alt="imagen"/>
                    </div>
                    <div className="card">
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Editor