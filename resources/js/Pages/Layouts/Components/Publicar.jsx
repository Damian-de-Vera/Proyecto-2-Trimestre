import React from 'react';
import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Publicar(props) {
    const { errors } = usePage().props
    const { flash } = usePage().props

    const [values, setForm] = useState({
        origin: "",
        destination: "",
        date: "",
        hour: "",
        seats: "",
        price: "",
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
        console.log(values)
        router.post('/publicarRuta', values)
    }
    return (

        <div class="container">
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
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <Card style={{ width: '45rem' }}>
                        <Card.Header className='text-center'>Publicar un viaje</Card.Header>
                        <Card.Body>
                            <Form method="POST" onSubmit={handleSubmit}>
                                <div class="row mb-3">
                                    <Form.Label for="origin" class="col-md-4 col-form-label text-md-end">Origen</Form.Label>
                                    <Form.Group className="col-md-6" >
                                        <select id="origin" value={values.origin} onChange={handleChange} class="form-select" aria-label="Default select example">
                                            <option selected></option>
                                            <option >Puerto del Rosario</option>
                                            <option >Gran Tarajal</option>
                                            <option >Corralejo</option>
                                            <option >Morro Jable</option>
                                            <option >La Oliva</option>
                                        </select>
                                        {errors.origin && <div><strong>{errors.origin}</strong></div>}
                                    </Form.Group>
                                </div>

                                <div class="row mb-3">
                                    <Form.Label for="destination" class="col-md-4 col-form-label text-md-end">Destino</Form.Label>

                                    <Form.Group className="col-md-6" >
                                        <select id="destination" value={values.destination} onChange={handleChange} class="form-select" aria-label="Default select example">
                                            <option selected></option>
                                            <option >Puerto del Rosario</option>
                                            <option>Gran Tarajal</option>
                                            <option>Corralejo</option>
                                            <option >Morro Jable</option>
                                            <option >La Oliva</option>
                                        </select>
                                        {errors.destination && <div><strong>{errors.destination}</strong></div>}
                                    </Form.Group>
                                </div>

                                <div class="row mb-3">
                                    <Form.Label for="date" class="col-md-4 col-form-label text-md-end">Fecha</Form.Label>
                                    <Form.Group className="col-md-6" >
                                        <Form.Control id="date" value={values.date} onChange={handleChange} type="date" name="date" class="form-control" autocomplete="date" />
                                        {errors.date && <div><strong>{errors.date}</strong></div>}
                                    </Form.Group>
                                </div>

                                <div class="row mb-3">
                                    <Form.Label for="hour" class="col-md-4 col-form-label text-md-end">Hora</Form.Label>
                                    <Form.Group className=" col-md-6" >
                                        <Form.Control id="hour" value={values.hour} onChange={handleChange} type="time" class="form-control" name="hour" autocomplete="hour" />
                                        {errors.hour && <div><strong>{errors.hour}</strong></div>}
                                    </Form.Group>
                                </div>

                                <div class="row mb-3">
                                    <Form.Label for="seats" class="col-md-4 col-form-label text-md-end">Asientos</Form.Label>
                                    <Form.Group className="col-md-6" >
                                        <Form.Control id="seats" value={values.seats} onChange={handleChange} type="number" class="form-control" name="seats" autocomplete="seats" />
                                        {errors.seats && <div><strong>{errors.seats}</strong></div>}
                                    </Form.Group>
                                </div>

                                <div class="row mb-3">
                                    <Form.Label for="price" class="col-md-4 col-form-label text-md-end">Precio</Form.Label>
                                    <Form.Group className="col-md-6" >
                                        <Form.Control id="price" value={values.price} onChange={handleChange} type="number" class="form-control" name="price" autocomplete="price" />
                                        {errors.price && <div><strong>{errors.price}</strong></div>}
                                    </Form.Group>
                                </div>

                                <div class="row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <Button variant="primary" type='submit' >Publicar viaje</Button>
                                    </div>
                                </div>

                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default Publicar
