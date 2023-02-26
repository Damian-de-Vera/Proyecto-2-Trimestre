import React from 'react';
import { Inertia } from '@inertiajs/inertia'

import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'

function Reservar(props) {

    const [values, setForm] = useState({
        users_id: props.user.id,
        travel_id: props.travel.id
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
        router.post('/reservarRuta', values)
    }
    return (
        
                            <form method="POST" onSubmit={handleSubmit}>
                                    <div class="col-md-6">
                                        <input id="users_id" value={values.users_id} onChange={handleChange}  type="hidden" class="form-control" name="users_id" required autocomplete="users_id" />
                                    </div>

                                    <div class="col-md-6">
                                        <input id="travel_id" value={values.travel_id} onChange={handleChange}  type="hidden" class="form-control" name="travel_id" required autocomplete="travel_id" />
                                    </div>
                    
                                <div class="row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                           Reservar
                                        </button>
                                    </div>
                                </div>
                            </form>

    )
}
export default Reservar