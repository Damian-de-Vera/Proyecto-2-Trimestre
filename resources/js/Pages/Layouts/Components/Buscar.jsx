import React from 'react';
import { Link } from '@inertiajs/react'

import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'
import Reservar from '@/Pages/Layouts/Components/Reservar';


export default function Buscar(props) {
    const { flash } = usePage().props

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
           {flash.message && (
                <div class="alert alert-success d-flex align-items-center py-3" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <div>
                        {flash.message}

                    </div>
                </div>
            )}
            
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
