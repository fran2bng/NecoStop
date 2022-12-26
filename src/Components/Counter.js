import { Button } from "bootstrap";

function Boton({ nombre, anyButon, evento }) {
    return (
        <button className={anyButon ? "botonClic" : "botonReset"} onClick={evento}>
            {nombre}
        </button>
    )
}

export default Boton