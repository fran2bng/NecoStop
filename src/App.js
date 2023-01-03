import './Components/Boxes.css';
import Box from "./Components/box1";
import "./App.css";
import Navbar from "./Components/nav";
import Boton from "./Components/Buttons.js";
import { Formik } from 'formik';
import { Container, Form, Button } from "semantic-ui-react"  

function App() {

  const hacerClick = () => {
    console.log("click");
  }

  const conterReboot = () => {
    console.log("reiniciar")
  }

  return (

    <div className="App">

      <Container className='formulario'>
      <h1>formulario</h1>
      <Form className='form'>
         <Form.Input type="text"></Form.Input>
      </Form>
      </Container>
    </div>



  );
}

export default App;


