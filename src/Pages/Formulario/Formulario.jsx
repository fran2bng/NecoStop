import React from 'react'
import { TextField, Grid, Button } from '@mui/material'
import "./Formulario.css"
import { useFormik, validateYupSchema, yupToFormErrors, } from 'formik'
import { FormField } from 'semantic-ui-react'
import * as Yup from "yup"
import { ErrorResponse } from '@remix-run/router'
import axios from 'axios'

const url = "https://api.restful-api.dev/objects";




const Formulario = () => {

const sendForm = (data) =>{
    console.log(data)
}




const {handleChange, formik, handleSubmit, values, errors } = useFormik ({
    initialValues:{
        Usuario: "",
        Email: "",
        Password: "",
    },

    

    validationSchema: Yup.object({
        Usuario: Yup.string().required("Ingresa tu usuario"),
        Email: Yup.string().required("Em, el Email por favor"),
        Password: Yup.string().required("Que te cuesta")
    }),


    onSubmit: sendForm
    
})

    return (
        <div>
            <h1 className='text1'> Formulario </h1>

            <form className='form1' onSubmit={ handleSubmit }>

                <Grid container
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={3}>

                    <Grid item>
                        <TextField
                            type="text"
                            id="outlined-basic"
                            label="Usuario"
                            variant="outlined" 
                            name='Usuario'
                            onChange={handleChange}
                            value={values.Usuario}
                            error={errors.Usuario}
                            helperText={errors.Usuario}
                            />
                    </Grid>
                    <Grid item>
                        <TextField
                            type="text"
                            id="outlined-basic"
                            label="coso"
                            variant="outlined"
                            name='Email' 
                            onChange={handleChange}
                            value={values.Email}
                            error={errors.Email}
                            helperText={errors.Email}
                            />
                    </Grid>
                    <Grid item>
                        <TextField
                            type="password"
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            name='Password' 
                            onChange={handleChange}
                            value={values.Password}
                            error={errors.Password}
                            helperText={errors.Password}/>
                    </Grid>
                </Grid>
                <Button type='submit' variant='contained'>Send</Button>
            </form>

        </div>
    )
}

export default Formulario