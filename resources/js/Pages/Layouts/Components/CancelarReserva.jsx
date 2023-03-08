import React from 'react';
import { useState } from 'react'
import { router } from '@inertiajs/react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CancelarReserva(props) {

    console.log(props);
    const [values] = useState({
        id: props.props.id,
        user_id: props.props.user_id,
        travel_id: props.props.travel_id,

    })

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/cancelarViaje', values)
    }
    return (
        <Form onSubmit={handleSubmit}>

            <Button variant="outline-danger" type='submit' >Cancelar</Button>
        </Form>



    )
}
export default CancelarReserva