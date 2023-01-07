import axios from "axios";
import { Await } from "react-router-dom";

const employee_name = async() => {
    const peticion = Await; axios.get("https://dummy.restapiexample.com/api/v1/employees")
    console.log(peticion)
}

export {
    employee_name
}