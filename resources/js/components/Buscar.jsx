import { usePage } from '@inertiajs/react'

export default function Buscar(props) {
    let rutas = props.travel;
    console.log(props)
    return (

        <div>
            {rutas.map((ruta, index) => {
                return (
                    <div key={index}>
                        <h2>Origen: {ruta.origin}</h2>
                        <h2>Destino: {ruta.destination}</h2>
                        <h2>Fecha: {ruta.date}</h2>
                        <h2>Hora: {ruta.hour}</h2>
                        <h2>Asientos: {ruta.seats}</h2>
                        <h2>Conductor: {ruta.user.name}</h2>

                        <hr />
                    </div>
                );
            })}

        </div>
    );
}
