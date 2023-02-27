import React from 'react';
import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'

export default function Buscar(props) {

    const [values, setForm] = useState({
        origin: "",
        destination: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value

        setForm(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.get('/buscar', values)
    }
    let rutas = props.travel;
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
                        <div class="card" style="width:400px">
                            <img class="card-img-top" src="img_avatar1.png" alt="Card image"/>
                                <div class="card-body">
                                    <h4 class="card-title">John Doe</h4>
                                    <p>Origen: {ruta.origin}</p>
                                    <p class="card-text">Some example text.</p>
                                    <a href="#" class="btn btn-primary">See Profile</a>
                                </div>
                        </div>
                    </div>
                );
            })}

        </div>
    );
}

