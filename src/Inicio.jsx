import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";
import Header from "./Header";

function Inicio() {

    //todo lo que quiero tener del contexto en el componente
    const {propiedades, ubicaciones, opciones, setOpciones} = useContext(AppContext);

    // me trae los arrarys funciona bien
    // console.log(propiedades);
    // console.log(ubicaciones);
    // console.log(opciones);

    const handleChange = (event) => {

        //me trae lo seleccionado funciona bien
        // console.log(event.target.value);

        //Componentes= App.Provider: genera un estado con todas las "propiedades" "ubicaciones" "input" y en Context.Provider una funcion dispatchSetState() para cambiar el estado
        const {name, value} = event.target;
        setOpciones({ ...opciones, [name]: value });

        //AYUDA PROFE!!!! aunque pongo "...opciones" NO ME GUARDA LO SELECCIONADO ANTERIORMENTE, ME PONE LO ULTIMO QUE SELECCIONE :( no puedo avanzar con el dispatch si no me guarda
    
    };

    return (
        <>
            <div className="historial"><Link to="/Historial" title="Ver Historial">📋</Link></div>

            <Header/>

            <div className="center div-cotizador">
                <h2 className="center separador">Ingrese los datos solicitados</h2>

                <label htmlFor="propiedades">Seleccione tipo de propiedad:</label>

                <select className="propiedades" id="propiedades" onChange={handleChange}>
                    type=""
                    id="propiedad"
                    name="propiedad"
                    value={opciones.tipo}
                    <option>...</option>
                    {propiedades.map((propiedad) => (
                        <option key={propiedad.id} value={propiedad.id}>{propiedad.tipo}</option>
                    ))}
                </select>

                <label htmlFor="ubicaciones">Seleccione ubicacion de propiedad:</label>

                <select className="ubicaciones" id="ubicaciones" onChange={handleChange}>
                    type=""
                    id="ubicacion"
                    name="ubicacion"
                    value={opciones.ubicacion}
                    <option>...</option>
                    {ubicaciones.map((ubicacion) => (
                        <option key={ubicacion.id} value={ubicacion.id}>{ubicacion.tipo}</option>
                    ))}
                </select>

                <label htmlFor="metros">Ingrese metros cuadrados:</label>
                <input className="metros" id="metros" type="number" onChange={handleChange} required/>

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