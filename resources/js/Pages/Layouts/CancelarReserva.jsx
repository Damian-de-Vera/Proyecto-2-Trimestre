import React from 'react';

import { useState } from 'react'
import { router } from '@inertiajs/react'

function CancelarReserva(props) {

    const [values] = useState({
        id: props.id,
    })

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/cancelarViaje', values)
    }
    return (

        <form onSubmit={handleSubmit}>
            <input id="id" type="hidden" value={values.id} name="id" />
            <button type="submit" class="btn btn-danger">Cancelar</button>
        </form>

    )
}
export default CancelarReserva