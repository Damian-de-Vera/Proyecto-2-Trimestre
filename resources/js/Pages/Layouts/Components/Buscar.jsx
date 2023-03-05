import React from 'react';
import { Link } from '@inertiajs/react'
import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'
import Reservar from '@/Pages/Layouts/Components/Reservar';
import LinkAPerfil from '@/Pages/Layouts/Components/LinkAPerfil';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
            {flash.errormessage && (
                <div class="alert alert-danger d-flex align-items-center py-3" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                    </svg>
                    <div>
                        {flash.errormessage}

                    </div>
                </div>
            )}


            <nav className="navbar navbar-light bg-light px-5">
                <div className="container-fluid">
                    <div className="row">
                        <Form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control className="form-control me-2" id="date" value={values.date} onChange={handleChange} type="date" name="search" placeholder="Buscar" aria-label="Buscar" />
                            </Form.Group>
                            <Button variant="outline-info" type='submit' >Buscar</Button>
                        </Form>
                    </div>
                </div>
            </nav>


            {rutas.map((ruta, index) => {

                return (
                    <div key={index}>
                        <div className="container">
                            <div className="row">
                                <div className="col-3 my-3">
                                    <Card style={{ width: '20rem' }}>
                                        <Card.Body>
                                            <Card.Title>Origen: {ruta.origin}</Card.Title>
                                            <Card.Text>Destino: {ruta.destination}</Card.Text>
                                            <Card.Text>Fecha: {ruta.date}</Card.Text>
                                            <Card.Text>Hora: {ruta.hour}</Card.Text>
                                            <Card.Text>Asientos: {ruta.seats}</Card.Text>
                                            <Card.Text>Precio: {ruta.price}€</Card.Text>
                                            <LinkAPerfil props={ruta} />
                                            {user == null &&
                                                <Link href="/loginReact" className='btn btn-primary'>Reservar</Link>
                                            }
                                            {user != null &&
                                                <Reservar user={props.user} travel={ruta} />
                                            }
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>


                    </div>
                );
            })}


        </div>
    );
}
