import React from 'react';
import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Login() {

    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const { errors } = usePage().props

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/login', values)
    }
    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <Card style={{ width: '40rem' }}>
                        <Card.Header>Login</Card.Header>
                        <Card.Body>
                            <Form method="POST" onSubmit={handleSubmit}>
                                <div class="row mb-3">
                                    <Form.Label for="email" class="col-md-4 col-form-label text-md-end">Email address</Form.Label>

                                    <div class="col-md-6">
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control id="email" type="email" value={values.email} onChange={handleChange} class="form-control  " autocomplete="email" autofocus />
                                            {errors.email && <div><strong>{errors.email}</strong></div>}
                                        </Form.Group>
                                    </div>
                                </div>


                                <div class="row mb-3">
                                    <Form.Label for="password" class="col-md-4 col-form-label text-md-end" >Password</Form.Label>

                                    <div class="col-md-6">
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control id="password" value={values.password} onChange={handleChange} type="password" class="form-control" name="password" autocomplete="current-password" />
                                            {errors.password && <div><strong>{errors.password}</strong></div>}

                                        </Form.Group>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-md-6 offset-md-4">
                                        <div class="form-check">
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Remember Me" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-0">
                                    <div class="col-md-8 offset-md-4">
                                        <Button variant="primary" type="submit">
                                            Login
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

export default Login;

