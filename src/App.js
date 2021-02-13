import Header from './componets/Header'
import Navbar from './componets/Navbar'

import './styleComponets/app.css'
import {useState} from 'react'



function App() {
  
  let [img,setImg] = useState("")

  // funcion que se pasa a Navbar, para saber que imagen
  let imageElegida = (imagen)=>{
    let imagenes = []
    imagenes.push(...img,imagen)
    setImg(img=imagenes)
  }
  
  let giveImagen = (e)=>{
    let divImage = e.target.parentElement
    console.log(divImage);
    let img = document.getElementsByClassName("image")
    for (let i = 0; i < img.length; i++) {
      img[i].classList.remove("fantasma")    
    }
    e.target.parentElement.classList.add("fantasma")
    this.addEventListener("onMouseMove",()=>{

    })
  }

  let moveImage = (e)=>{
    console.log("x"+e.clientX);
    console.log(e);
    e.target.parentElement.setAttribute("style","position:adsolute")
    e.target.parentElement.setAttribute("style",`transform: translate(${e.pageX}px, ${e.pageY}px);`)
  }
  
  return (
    
    <div className="App">
      <Header/>
      <main className="section">
      <Navbar seleccion={imageElegida}/>
      <div className="home">
        <div className="edition">
          {
            img !== ""? img.map(image =>(
              <div className="image">
                <img src={image} alt="imagen" onMouseDown={(e)=>{giveImagen(e)}} onMouseMove={(e)=>{moveImage(e)}}  />
              </div>
            )):<div></div>
          }
        </div>
      </div>
      </main>
    </div>
  );
}

export default App;
