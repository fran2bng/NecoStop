import './Components/Boxes.css';
import Box from "./Components/box1";
import "./App.css";
import Navbar from "./Components/nav";
import Boton from "./Components/Buttons.js";
import { useFormik } from 'formik';
import { Container, Form, Button } from "semantic-ui-react";
import * as yup from "yup";

function App() {

    const formik = useFormik({

        onSubmit: (formData) => {
            console.log(formData)
        },
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("pone el nombre imbecil"),
            email: yup.string().email().required(),
            password: yup.string().required(),
        })
    })

    return (

        <div className="App">

            <Container className="formulario" onSubmit={formik.handleSubmit}>
                <h1>Bienvenido!</h1>
                <p>logwaddw</p>
                <Form className='form'>
                    <Form.Input
                        type="text"
                        placeholder="Usuario"
                        name="name" 
                        onChange={formik.handleChange}
                        error={formik.errors.name}
                        />
                    <Form.Input
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        onChange={formik.handleChange}
                        error={formik.errors.password} 
                    />
                    <Form.Input
                        type="text"
                        placeholder="Correo electrónico"
                        name="email"
                        onChange={formik.handleChange}
                        error={formik.errors.email}
                    />
                    <Button type="submit">Aceptar</Button>
                    <Button type="button">Limpiar</Button>






                </Form>
            </Container>
        </div>



    );
}

export default App;


