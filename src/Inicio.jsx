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
            <div className="historial"><span title=""Ver Historial>📋</span></div>

            <h1 className="center separador">SegurAr seguros inmobiliarios  🏡</h1>

            <div className="center div-cotizador">
                <h2 center separador>Ingrese los datos solicitados</h2>

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

                <section className="center separador">
                    <button className="button button-outline">Cotizar</button>
                </section>

            </div>

            <div className="center separador">
                <p className="importe">Precio: $ <span>0.00</span></p>
            </div>
        </>
    )
}

export default Inicio;