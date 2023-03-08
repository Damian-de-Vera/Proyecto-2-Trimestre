import React from 'react';
import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'
import CardUser from '@/Pages/Layouts/Components/CardUser';
import Avatar from '@/Pages/Layouts/Components/Avatar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Perfil(props) {
    const { errors } = usePage().props
    const { flash } = usePage().props

    const [values, setForm] = useState({
        name: props.user.name,
        email: props.user.email,
        password: "",
        password_confirmation: ""
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
        router.post('/updateUser', values)
    }
    return (

        <div class="container min-vh-100">
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
                <div class="alert alert-danger py-3" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
                    </svg>
                    <div>
                        {flash.errormessage}

                    </div>
                </div>
            )}

            {props.userDiferente == null &&
                <div class="row ">
                    <div class="col ">
                        <div class="card my-4">
                            <div class="card-header">Actualizar datos</div>
                            <div class="card-body">
                                <Form method="POST" onSubmit={handleSubmit}>
                                    <div class="row mb-3">
                                        <Form.Label for="name" class="col-md-4 col-form-label text-md-end">Nombre</Form.Label>
                                        <Form.Group className="mb-3 col-md-6" >
                                            <Form.Control id="name" type="text" class="form-control" value={values.name} onChange={handleChange} autocomplete="name" autofocus />

                                            {errors.name && <div><strong>{errors.name}</strong></div>}
                                        </Form.Group>
                                    </div>

                                    <div class="row mb-3">
                                        <Form.Label for="email" class="col-md-4 col-form-label text-md-end">Email Address</Form.Label>

                                        <div class="col-md-6">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control id="email" type="email" class="form-control " name="email" value={values.email} onChange={handleChange} autocomplete="email" />

                                                {errors.email && <div><strong>{errors.email}</strong></div>}
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <Form.Label for="password" class="col-md-4 col-form-label text-md-end">Contraseña</Form.Label>
                                        <div class="col-md-6">
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Control id="password" value={values.password} onChange={handleChange} type="password" name="password" class="form-control" autocomplete="new-password" />

                                                {errors.password && <div><strong>{errors.password}</strong></div>}
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <Form.Label for="password_confirmation" class="col-md-4 col-form-label text-md-end">Confirmar Contraseña</Form.Label>
                                        <div class="col-md-6">
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Control id="password_confirmation" value={values.password_confirmation} onChange={handleChange} type="password" class="form-control" name="password_confirmation" autocomplete="new-password" />
                                                {errors.password_confirmation && <div><strong>{errors.password_confirmation}</strong></div>}
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div class="row mb-0">
                                        <div class="col-md-6 offset-md-4">
                                            <Button variant="primary" type="submit">
                                                Enviar
                                            </Button>
                                        </div>
                                    </div>
                                </Form>
                                <Avatar props={props} />
                            </div>
                        </div>
                    </div>
                </div>}
            {props.userDiferente == true &&
                <CardUser props={props} />
            }
        </div>
    );
}

export default Perfil;

