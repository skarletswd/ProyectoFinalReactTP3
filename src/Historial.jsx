import { Link } from "react-router-dom";

function Historial() {
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
                        <tr>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                        </tr>
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