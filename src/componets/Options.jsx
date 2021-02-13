import React,{Component} from 'react'
import '../styleComponets/options.css'


class Options extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    
    getWindow(e){
        let titulo = this.props.name
        e.preventDefault()
    
        let li = document.getElementsByClassName('option')
        for (let i = 0; i < li.length; i++) {
            li[i].classList.remove("active")    
        }
        e.target.parentElement.classList.add("active")
        this.props.funcion(titulo)
        
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