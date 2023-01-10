
import { useFormik } from 'formik';
import { Container, Form, Button, Header } from "semantic-ui-react";
import * as yup from "yup";
import axios from "axios"
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


    const Form1 = () => {
        const [user, setUser] = useState({
          name: "",
          password: "",
          email: "",
        });
      
        const { name, email, password,  } = user;
        const onInputChange = (e) => {
          setUser({ ...user, [e.target.name]: e.target.value });
        };
      
        const onSubmit = async (e) => {
          e.preventDefault();
          await axios.post("https://postman-echo.com/get", user);
        };
    

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
        <Container className="formulario" onSubmit={(e) => onSubmit(e)}>
            <h1>Bienvenido!</h1>
            <p>logwaddw</p>
            <Form className='form'>
                <Form.Input
                    type="text"
                    placeholder="Usuario"
                    name="name"
                    onChange={(e) => onInputChange(e)}
                    error={formik.errors.name}
                />
                <Form.Input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    onChange={(e) => onInputChange(e)}
                    error={formik.errors.password}
                />
                <Form.Input
                    type="text"
                    placeholder="Correo electrónico"
                    name="email"
                    onChange={(e) => onInputChange(e)}
                    error={formik.errors.email}
                />
                <Button type="submit">Aceptar</Button>
                <Button type="button">Limpiar</Button>



            </Form>
        </Container>


    )
}

export default Form1


