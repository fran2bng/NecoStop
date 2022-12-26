import './Components/Boxes.css';
import Box from "./Components/box1";
import "./App.css"
import Navbar from "./Components/nav"
import Boton from "./Components/Counter.js"

function App() {

  const hacerClick = () => {
    console.log("click");
  }

  const conterReboot = () => {
    console.log("reiniciar")
  }

  return (
    <div className="App">
      <h1 className='texto1'>Bienvenido a NecosStop!</h1>
      <Box
        saludo="buenos dias!"
        pregunta="Como estas?"
        imagen="box1image"
      />
      <Boton
        nombre="hola"
        anyButon={true}
        evento={hacerClick}
      />
      <Boton
      nombre="ole"
      anyButon={false}
      evento={conterReboot}
      />

      <Navbar />
    </div>



  );
}

export default App;


