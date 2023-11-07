import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Historial() {

    const [historialCotizaciones, setHistorialCotizaciones] = useState([]);
    const historial = JSON.parse(
      window.localStorage.getItem("historial") || "[]"
    );
  
    useEffect(() => {
      const cargarHistorial = () => {
        const historialGuardado =
          JSON.parse(localStorage.getItem("historialCotizaciones")) || [];
        setHistorialCotizaciones(historialGuardado);
      };
  
      cargarHistorial();
    }, []);
  
    const retornoTablaHTML = (fila) => {
      return (
        <tr key={fila.fecha}>
          <td>{fila.fecha}</td>
          <td>{fila.propiedad}</td>
          <td>{fila.ubicacion}</td>
          <td>{fila.metros2}</td>
          <td>$ {fila.cotizacion}</td>
        </tr>
      );
    };

    return (
        <>
            <h1 className="center separador">Historial de cotizaciones</h1>

            <div className="center div-cotizador">
                <table>
                    <thead>
                        <th>Fecha de cotización</th>
                        <th>Propiedad</th>
                        <th>Ubicación</th>
                        <th>Metros cuadrados</th>
                        <th>Póliza mensual</th>
                    </thead>
                    <tbody>
                    {historial.map((fila) => retornoTablaHTML(fila))}
                    </tbody>
                </table>

                <section className="center separador">
                    <Link to="/"><button className="button button-outline">Volver</button></Link>
                </section>

            </div>
        </>
    )
}

export default Historial;