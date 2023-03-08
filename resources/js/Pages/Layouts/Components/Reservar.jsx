import React from 'react';
import { useState } from 'react'
import { router } from '@inertiajs/react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Reservar(props) {
    const [values, setForm] = useState({
        user_id: props.user.id,
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

        <Form method="POST" onSubmit={handleSubmit}>

            <div className="col-md-6">
                <Form.Group className="mb-3">
                    <Form.Control id="user_id" value={values.user_id} onChange={handleChange} type="hidden" className="form-control" name="user_id" required autocomplete="user_id" />
                </Form.Group>
            </div>

            <div className="col-md-6">
                <Form.Group className="mb-3">
                    <Form.Control id="travel_id" value={values.travel_id} onChange={handleChange} type="hidden" className="form-control" name="travel_id" required autocomplete="travel_id" />
                </Form.Group>
            </div>

            <div className="row mb-0">
                <div className="col-md-6 offset-md-4">
                    <Button variant="primary" type='submit' >Reservar</Button>

                </div>
            </div>
        </Form>

    )
}
export default Reservar