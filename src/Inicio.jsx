import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";

function Inicio() {

    //todo lo que quiero tener del contexto en el componente
    const {propiedades, ubicaciones, form, setForm} = useContext(AppContext);

    // me trae los arrarys
    // console.log(propiedades);
    // console.log(ubicaciones);
    console.log(form);
    

    const [values, setValues] = useState({
        tipo:"",
        ubicacion:"",
        metros:"",
    });

    const handleChange = (event) => {

        //me trae lo seleccionado
        console.log(event.target.value);

        //Componentes= App.Provider: genera un estado con todas las "propiedades" "ubicaiones" "input" y en Context.Provider una funcion dispatchSetState() para cambiar el estado
        setForm({ ...form, todo: event.target.value });

        // console.log(event.target.name, event.target.value);
        // setValues({...values, [event.target.name]: event.target.value});
    }

    // console.log(event.target.name);

    return (
        <>
            <div className="historial"><Link to="/Historial" title="Ver Historial">📋</Link></div>

            <h1 className="center separador">SegurAr seguros inmobiliarios  🏡</h1>

            <div className="center div-cotizador">
                <h2 className="center separador">Ingrese los datos solicitados</h2>

                <label htmlFor="todo">Seleccione tipo de propiedad:</label>

                <select name="todo" id="todo" onChange={handleChange}>
                    type=""
                    id="tipo"
                    name="tipo"
                    value={values.tipo}
                    <option>...</option>
                    {propiedades.map((propiedad) => (
                        <option key={propiedad.id} value={propiedad.id}>{propiedad.tipo}</option>
                    ))}
                </select>

                <label htmlFor="todo">Seleccione ubicacion de propiedad:</label>

                <select name="todo" id="todo" onChange={handleChange}>
                    type=""
                    id="ubicacion"
                    name="ubicacion"
                    value={values.ubicacion}
                    <option>...</option>
                    {ubicaciones.map((ubicacion) => (
                        <option key={ubicacion.id} value={ubicacion.id}>{ubicacion.tipo}</option>
                    ))}
                </select>

                <label htmlFor="metros">Ingrese metros cuadrados:</label>
                <input type="number" onChange={handleChange} required/>

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