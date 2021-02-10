import React,{Component} from 'react'
import '../styleComponets/header.css'

class Header extends Component{
    constructor(){
        super()
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="header">
                <div className="logo">
                    <p>Logo</p>
                </div>
                <div className="options">
                    <ul>
                        <li>Categories</li>
                        <li className="create">Create it yourSelf</li>
                        <li>Download</li>
                    </ul>
                </div>
                <div className="logger">
                    <div className="icono"><i>carrito</i></div>
                    <div><button className="login">Login</button></div>
                    <div><button className="sign">Sign up</button></div>
                </div>
            </div>
        )
    }
    
}

export default Header