import React from 'react';
import { useState } from 'react'
import { router } from '@inertiajs/react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CancelarReserva(props) {

    const [values] = useState({
        id: props.props.id,
        travel_id: props.props.travel_id
    })

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/cancelarViaje', values)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Control id="id" type="hidden" value={values.id} name="id" />
            </Form.Group>
            <Button variant="outline-danger" type='submit' >Cancelar</Button>
        </Form>



    )
}
export default CancelarReserva