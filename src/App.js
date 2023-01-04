import './Components/Boxes.css';
import Box from "./Components/box1";
import "./App.css";
import Navbar from "./Components/nav";
import Boton from "./Components/Buttons.js";
import { useFormik } from 'formik';
import { Container, Form, Button } from "semantic-ui-react";
import * as yup from "yup";
import Form1 from './Components/Form';

function App() {
  return (
    <div className="App">
      <Form1/>
    </div>
  );
}

export default App;