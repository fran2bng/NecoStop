import React from 'react'
import { useEffect, useState } from 'react'
import { TextField, Grid, Button } from '@mui/material'
import "./form.css"
import { useFormik, validateYupSchema, yupToFormErrors, } from 'formik'
import { FormField } from 'semantic-ui-react'
import * as Yup from "yup"
import { ErrorResponse } from '@remix-run/router'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const AxiosInstance = axios.create({
    baseURL: `$'http://localhost:5000/user',
}`,
});


const Form = () => {


    const sendForm = async (values) => {
        const response = await axios({

            method: 'post',
            url: 'http://localhost:5000/user',
            data: { values }
        })
        alert(JSON.stringify(values, null, 2));
    }
    const { handleChange, formik, handleSubmit, values, errors, submitForm } = useFormik({
        initialValues: {
            user: "",
            email: "",
            password: "",
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
            <h1 className='text1'> Boring ussles formulary </h1>
            <p className='text1'>that trigger a boring POST </p>
            
            <form className='form1' onSubmit={handleSubmit}>

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
                            value={values.user}
                            error={!!errors.user}
                            helperText={errors.user}
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
                            value={values.email}
                            error={!!errors.email}
                            helperText={errors.email}
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
                            value={values.password}
                            error={!!errors.password}
                            helperText={errors.password} />
                    </Grid>
                </Grid>
                <Button
                    type='submit'
                >Send</Button>
                <Link to="/Characters" className='link'>Well.. Maybe the "formulary" shit is not fully implemented, this is the map thing </Link>

            </form>

        </div>
    )
}

export default Form