import React from 'react';
import { Inertia } from '@inertiajs/inertia'

import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'

function Publicar(props) {
    const { errors } = usePage().props

    const [values, setForm] = useState({
        origin: "",
        destination: "",
        date: "",
        hour: "",
        seats: "",
        user_id: props.user.id
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
        router.post('/publicarRuta', values)
    }
    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header text-center">Publicar un viaje</div>

                        <div class="card-body">

                            <form method="POST" onSubmit={handleSubmit}>
                                <div class="row mb-3">
                                    <label for="origin" class="col-md-4 col-form-label text-md-end">Origen</label>

                                    <div class="col-md-6">
                                        <input id="origin" type="text" class="form-control" value={values.name} onChange={handleChange}  autocomplete="origin" autofocus />
                                        {errors.origin && <div><strong>{errors.origin}</strong></div>}




                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="destination" class="col-md-4 col-form-label text-md-end">Destino</label>

                                    <div class="col-md-6">
                                        <input id="destination" type="text" class="form-control " name="destination" value={values.email} onChange={handleChange}  autocomplete="destination" />
                                        {errors.destination && <div><strong>{errors.destination}</strong></div>}




                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="date" class="col-md-4 col-form-label text-md-end">Fecha</label>

                                    <div class="col-md-6">

                                        <input id="date" value={values.date} onChange={handleChange} type="date" name="date" class="form-control"  autocomplete="date" />
                                        {errors.date && <div><strong>{errors.date}</strong></div>}



                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="hour" class="col-md-4 col-form-label text-md-end">Hora</label>

                                    <div class="col-md-6">
                                        <input id="hour" value={values.hour} onChange={handleChange} type="time" class="form-control" name="hour"  autocomplete="hour" />
                                        {errors.hour && <div><strong>{errors.hour}</strong></div>}

                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="seats" class="col-md-4 col-form-label text-md-end">Asientos</label>

                                    <div class="col-md-6">
                                        <input id="seats" value={values.seats} onChange={handleChange} type="number" class="form-control" name="seats"  autocomplete="seats" />
                                        {errors.seats && <div><strong>{errors.seats}</strong></div>}

                                    </div>
                                </div>

                                <div class="row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            Publicar viaje
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Publicar