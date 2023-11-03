import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";

function Inicio() {

    const {propiedades} = useContext(AppContext);

    const {ubicaciones} = useContext(AppContext);

    console.log(propiedades);

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
            <div className="historial"><Link to="/Historial" title="Ver Historial">📋</Link></div>

            <h1 className="center separador">SegurAr seguros inmobiliarios  🏡</h1>

            <div className="center div-cotizador">
                <h2 center separador>Ingrese los datos solicitados</h2>

                <label htmlFor="todo">Seleccione tipo de propiedad:</label>

                <select name="todo" id="todo">
                    type=""
                    id="tipo"
                    name="tipo"
                    value={values.tipo}
                    onChange={handleChange}
                    <option selected disabled>...</option>
                    {propiedades.map((propiedad) => (
                        <option key={propiedad.id} value={propiedad.id}>{propiedad.tipo}</option>
                    ))}
                </select>

                <label htmlFor="todo">Seleccione ubicacion de propiedad:</label>

                <select name="todo" id="todo">
                    type=""
                    id="ubicacion"
                    name="ubicacion"
                    value={values.ubicacion}
                    onChange={handleChange}
                    <option selected disabled>...</option>
                    {ubicaciones.map((ubicacion) => (
                        <option key={ubicacion.id} value={ubicacion.id}>{ubicacion.tipo}</option>
                    ))}
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