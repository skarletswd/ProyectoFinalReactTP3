import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";
import Header from "./Header";

function Inicio() {

    //todo lo que quiero tener del contexto en el componente
    const {propiedades, ubicaciones, handleSubmit, cotizacion, handleChange, handleInput} = useContext(AppContext);


    return (
        <>
            <div className="historial">
                <Link to="/Historial">
                    <span >📋</span>
                </Link>
            </div>

            <Header/>

            <div className="center div-cotizador">

                <h2 className="center separador">
                    Ingrese los datos solicitados
                </h2>

                <label htmlFor="propiedades">
                    Seleccione tipo de propiedad:
                </label>

                <select className="propiedades" id="propiedades" name="propiedad" onChange={handleChange}>

                    <option>...</option>
                    {propiedades.map((propiedad) => (
                        <option key={propiedad.id} value={propiedad.id}>
                            {propiedad.tipo}
                        </option>
                    ))}
                </select>


                <label htmlFor="ubicaciones">
                    Seleccione ubicacion de propiedad:
                </label>

                <select className="ubicaciones" id="ubicaciones" name="ubicacion" onChange={handleChange}>

                    <option>...</option>
                    {ubicaciones.map((ubicacion) => (
                        <option key={ubicacion.id} value={ubicacion.id}>
                            {ubicacion.tipo}
                        </option>
                    ))}
                </select>


                <label htmlFor="metros">
                    Ingrese metros cuadrados:
                </label>

                <input className="metros" id="metros2" type="number" onChange={handleInput} min="25" required/>


                <section className="center separador">
                    <button className="button button-outline" type="button" onClick={handleSubmit}>
                        Cotizar
                    </button>
                </section>

            </div>


            <div className="center separador">
                <p className="importe">
                    Precio: $ <span id="valorPoliza">{cotizacion || '0.00'}</span>
                </p>
            </div>
        </>
    )
}

export default Inicio;