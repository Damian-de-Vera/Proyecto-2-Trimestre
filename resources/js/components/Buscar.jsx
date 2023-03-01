import React from 'react';
import { Link } from '@inertiajs/react'

import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'
import Reservar from '@/components/Reservar';

export default function Buscar(props) {
    const { errors } = usePage().props
    let user = props.user;

    const [values, setForm] = useState({
        date: ""
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
            <h1>Busquedas con filtro:</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="origin">Origen</label>
                <input id="origin" value={values.origin} onChange={handleChange} />
                <label htmlFor="destination">Destino</label>
                <input id="destination" value={values.destination} onChange={handleChange} />
                <button type="submit">Buscar</button>
            </form>
            {rutas.map((ruta, index) => {
                return (
                    <div key={index}>
                        <h2>Origen: {ruta.origin}</h2>
                        <h2>Destino: {ruta.destination}</h2>
                        <h2>Fecha: {ruta.date}</h2>
                        <h2>Hora: {ruta.hour}</h2>
                        <h2>Asientos: {ruta.seats}</h2>
                        <h2>Conductor: {ruta.user.name}</h2>
                        {user == null &&

                            <Link href="/loginReact" class='btn btn-primary'>Reservar</Link>
                        }
                        {user != null &&

                            <Reservar user={props.user} travel={ruta} />
                        }
                        <hr />
                    </div>
                );
            })}

        </div>
    );
}