import React from 'react';
import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Register() {
    const { errors } = usePage().props

    const [values, setForm] = useState({
        name: "",
        email: "",
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
        router.post('/register', values)
    }



    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <Card style={{ width: '45rem' }}>
                        <Card.Header>Register</Card.Header>
                        <Card.Body>

                            <Form method="POST" onSubmit={handleSubmit}>
                                <div class="row mb-3">
                                    <Form.Label for="name" class="col-md-4 col-form-label text-md-end">Name</Form.Label>
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
                                    <Form.Label for="password" class="col-md-4 col-form-label text-md-end">Password</Form.Label>

                                    <div class="col-md-6">
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control id="password" value={values.password} onChange={handleChange} type="password" name="password" class="form-control" autocomplete="new-password" />

                                            {errors.password && <div><strong>{errors.password}</strong></div>}
                                        </Form.Group>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <Form.Label for="password_confirmation" class="col-md-4 col-form-label text-md-end">Confirm Password</Form.Label>

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
                                            Register
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    );
}

export default Register;

