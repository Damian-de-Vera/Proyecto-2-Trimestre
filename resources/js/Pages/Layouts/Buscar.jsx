import React from 'react';
import { Link } from '@inertiajs/react'

import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'
import Reservar from '@/Pages/Layouts/Reservar';


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
                <label htmlFor="date">Fecha</label>
                <input id="date" type="date" value={values.date} onChange={handleChange} />
                <button type="submit">Buscar</button>
            </form>
            {rutas.map((ruta, index) => {
                return (
                    <div key={index}>


                        <div className="container">
                            <div className="row">
                                <div class="col-3 my-3">
                                    <div class="card " >
                                        <div class="card-body">
                                            <h3 class="card-title" >Origen: {ruta.origin}</h3>
                                            <p class="card-text">Destino: {ruta.destination}</p>
                                            <p class="card-text">Fecha: {ruta.date}</p>
                                            <p class="card-text">Hora: {ruta.hour}</p>
                                            <p class="card-text">Asientos: {ruta.seats}</p>
                                            <p class="card-text">Conductor: {ruta.user.name}</p>
                                            {user == null &&


                                                <Link href="/loginReact" class='btn btn-primary'>Reservar</Link>
                                            }
                                            {user != null &&


                                                <Reservar user={props.user} travel={ruta} />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                );
            })}


        </div>
    );
}
