import { useState } from "react";

function Inicio() {

    const [values, setValues] = useState({
        tipo:"",
        ubicacion:"",
        metros:"",
    });

    const handleChange = (event) => {
        console.log(event.target.name, event.target.value);
        setValues({...values, [event.target.name]: event.target.value});
    }

    return (
        <>
            <div>Historial</div>

            <h1>SegurAr seguros inmobiliarios</h1>

            <div>

                <h2>Ingrese los datos solicitados</h2>

                <label htmlFor="tipo">Seleccione tipo de propiedad:</label>

                <select>
                    type=""
                    id="tipo"
                    name="tipo"
                    value={values.tipo}
                    onChange={handleChange}
                    <option selected disabled>...</option>
                </select>

                <label htmlFor="ubicacion">Seleccione ubicacion de propiedad:</label>

                <select>
                    type=""
                    id="ubicacion"
                    name="ubicacion"
                    value={values.ubicacion}
                    onChange={handleChange}
                    <option selected disabled>...</option>
                </select>

                <label htmlFor="metros">Ingrese metros cuadrados:</label>
                <input type="number" required/>

                <p>Precio: $ <span>0.00</span></p>

            </div>

        </>
    )
}

export default Inicio;