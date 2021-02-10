import Header from './componets/Header'
import Navbar from './componets/Navbar'
import Home from './componets/Home'
import './styleComponets/app.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="section">
      <Navbar/>
      <Home/>
      </main>
    </div>
  );
}

export default App;
